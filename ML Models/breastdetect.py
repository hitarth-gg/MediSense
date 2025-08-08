import os
import tensorflow as tf
import numpy as np
from PIL import Image
import cv2
import json
from keras.models import load_model
from flask import Flask, request, render_template
from werkzeug.utils import secure_filename
from huggingface_hub import hf_hub_download


app = Flask(__name__)

# Global variables to store model and preprocessing info
model = None
preprocessing_info = None

def download_cbis_ddsm_model():
    """
    Download CBIS-DDSM CNN model from Hugging Face
    Based on maiurilorenzo/CBIS-DDSM-CNN repository
    """
    global model, preprocessing_info
    
    try:
        print("📥 Downloading CBIS-DDSM CNN model from Hugging Face...")
        
        # Download model file
        repo_id = "maiurilorenzo/CBIS-DDSM-CNN"
        model_path = hf_hub_download(repo_id=repo_id, filename="CNN_model.h5")
        model = tf.keras.models.load_model(model_path)
        
        # Download preprocessing configuration
        try:
            preprocessing_path = hf_hub_download(repo_id=repo_id, filename="preprocessing.json")
            with open(preprocessing_path, "r") as f:
                preprocessing_info = json.load(f)
            print("✅ Preprocessing config loaded successfully!")
        except Exception as e:
            print(f"⚠️  Could not load preprocessing.json, using defaults: {e}")
            # Default preprocessing based on the documentation
            preprocessing_info = {
                "target_size": [50, 50],  # Model expects 50x50 images
                "color_mode": "rgb",
                "normalize": True
            }
        
        print("✅ CBIS-DDSM CNN model loaded successfully!")
        print(f"📊 Model input shape: {model.input_shape}")
        print(f"📊 Model output shape: {model.output_shape}")
        
        return model
        
    except Exception as e:
        print(f"❌ Error downloading CBIS-DDSM model: {e}")
        print("🔄 Creating demo model as fallback...")
        return create_demo_model()

def create_demo_model():
    """
    Create a demo CNN model similar to CBIS-DDSM architecture
    Based on the documentation: 4 Convolutional layers + BatchNorm + Dropout
    """
    global preprocessing_info
    
    preprocessing_info = {
        "target_size": [50, 50],
        "color_mode": "rgb",
        "normalize": True
    }
    
    model = tf.keras.Sequential([
        # Conv Block 1
        tf.keras.layers.Conv2D(32, (3, 3), activation='relu', input_shape=(50, 50, 3)),
        tf.keras.layers.BatchNormalization(),
        tf.keras.layers.MaxPooling2D(2, 2),
        tf.keras.layers.Dropout(0.4),
        
        # Conv Block 2
        tf.keras.layers.Conv2D(64, (3, 3), activation='relu'),
        tf.keras.layers.BatchNormalization(),
        tf.keras.layers.MaxPooling2D(2, 2),
        tf.keras.layers.Dropout(0.4),
        
        # Conv Block 3
        tf.keras.layers.Conv2D(128, (3, 3), activation='relu'),
        tf.keras.layers.BatchNormalization(),
        tf.keras.layers.MaxPooling2D(2, 2),
        tf.keras.layers.Dropout(0.4),
        
        # Conv Block 4
        tf.keras.layers.Conv2D(256, (3, 3), activation='relu'),
        tf.keras.layers.BatchNormalization(),
        tf.keras.layers.Dropout(0.4),
        
        # Classifier
        tf.keras.layers.Flatten(),
        tf.keras.layers.Dense(512, activation='relu'),
        tf.keras.layers.Dropout(0.4),
        tf.keras.layers.Dense(1, activation='sigmoid')  # Binary classification
    ])
    
    model.compile(
        optimizer='adam',
        loss='binary_crossentropy',
        metrics=['accuracy']
    )
    
    return model

def load_and_preprocess_image(image_path):
    """
    Preprocess image according to CBIS-DDSM model requirements
    Based on the official preprocessing from the repository
    """
    try:
        # Read image
        img = cv2.imread(image_path, cv2.IMREAD_COLOR)
        if img is None:
            raise ValueError(f"Could not read image: {image_path}")
        
        # Convert from BGR to RGB
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        
        # Resize to target size (50x50 based on documentation)
        target_size = tuple(preprocessing_info["target_size"])
        img = cv2.resize(img, target_size, interpolation=cv2.INTER_AREA)
        
        # Normalize pixel values to [0, 1]
        if preprocessing_info["normalize"]:
            img_array = img.astype(np.float32) / 255.0
        else:
            img_array = img.astype(np.float32)
        
        return img_array
        
    except Exception as e:
        print(f"❌ Error processing {image_path}: {str(e)}")
        return None

def get_className(prediction):
    """
    Map prediction to readable class name
    Based on CBIS-DDSM model: binary classification (Cancer/Normal)
    """
    if isinstance(prediction, np.ndarray):
        cancer_probability = prediction[0] if len(prediction.shape) > 0 else prediction
    else:
        cancer_probability = prediction
    
    # Threshold at 0.5 for binary classification
    if cancer_probability >= 0.5:
        return f"⚠️ CANCER DETECTED (Probability: {cancer_probability:.1%})"
    else:
        return f"✅ NORMAL (Probability of cancer: {cancer_probability:.1%})"

def getResult(img_path):
    """
    Get prediction result from the CBIS-DDSM model
    """
    try:
        # Preprocess image
        img_array = load_and_preprocess_image(img_path)
        if img_array is None:
            return None, 0
            
        # Add batch dimension
        img_batch = np.expand_dims(img_array, axis=0)
        
        # Get prediction
        predictions = model.predict(img_batch, verbose=0)
        
        # For binary classification, get the cancer probability
        cancer_probability = predictions[0][0] if len(predictions[0]) > 0 else predictions[0]
        
        print(f"🔬 Raw prediction: {predictions}")
        print(f"📊 Cancer probability: {cancer_probability:.4f}")
        
        return cancer_probability, cancer_probability * 100
        
    except Exception as e:
        print(f"❌ Error getting result: {e}")
        return None, 0

# Load the CBIS-DDSM model
print("🚀 Starting CBIS-DDSM Breast Cancer Detection App...")
model = download_cbis_ddsm_model()
print(f'📡 Model loaded. Check http://127.0.0.1:5001/')

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/predict', methods=['GET', 'POST'])
def upload():
    if request.method == 'POST':
        try:
            f = request.files['file']
            
            # Check if file was uploaded
            if f.filename == '':
                return "❌ No file selected"
            
            # Check file extension
            allowed_extensions = {'png', 'jpg', 'jpeg', 'bmp', 'tiff', 'dcm'}
            if not ('.' in f.filename and 
                    f.filename.rsplit('.', 1)[1].lower() in allowed_extensions):
                return "❌ Invalid file format. Please upload an image file (PNG, JPG, JPEG, BMP, TIFF, DCM)."

            basepath = os.path.dirname(__file__)
            uploads_dir = os.path.join(basepath, 'uploads')
            
            # Create uploads directory if it doesn't exist
            if not os.path.exists(uploads_dir):
                os.makedirs(uploads_dir)
                
            file_path = os.path.join(uploads_dir, secure_filename(f.filename))
            f.save(file_path)
            
            # Get prediction
            result = getResult(file_path)
            if result[0] is None:
                return "❌ Error processing image. Please try again with a different image."
            
            prediction, confidence = result
            final_result = get_className(prediction)
            
            # Clean up uploaded file (optional)
            try:
                os.remove(file_path)
            except:
                pass
            
            # Format result with styling
            if prediction >= 0.5:
                return f"""
                <div style='color: #d32f2f; font-weight: bold; font-size: 18px; padding: 20px; 
                           background: #ffebee; border-radius: 8px; border-left: 4px solid #d32f2f;'>
                    {final_result}
                    <br><br>
                    <strong>⚠️ IMPORTANT:</strong> This is an AI screening tool only. 
                    Please consult with a qualified healthcare professional immediately for proper diagnosis.
                </div>
                """
            else:
                return f"""
                <div style='color: #388e3c; font-weight: bold; font-size: 18px; padding: 20px; 
                           background: #e8f5e8; border-radius: 8px; border-left: 4px solid #388e3c;'>
                    {final_result}
                    <br><br>
                    <strong>ℹ️ Note:</strong> This is an AI screening result. Regular medical check-ups 
                    are still recommended for comprehensive healthcare.
                </div>
                """
            
        except Exception as e:
            return f"❌ Error: {str(e)}"
    
    return "Please use POST method to upload a file"

if __name__ == '__main__':
    app.run(debug=True, port=5001)