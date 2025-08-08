import os
import tensorflow as tf
import numpy as np
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
    """
    global model, preprocessing_info
    
    # Start with a complete default configuration.
    preprocessing_info = {
        "target_size": [50, 50],
        "color_mode": "rgb",
        "normalize": True
    }
    
    try:
        print("📥 Downloading CBIS-DDSM CNN model from Hugging Face...")
        repo_id = "maiurilorenzo/CBIS-DDSM-CNN"
        model_path = hf_hub_download(repo_id=repo_id, filename="CNN_model.h5")
        model = tf.keras.models.load_model(model_path)
        
        try:
            preprocessing_path = hf_hub_download(repo_id=repo_id, filename="preprocessing.json")
            with open(preprocessing_path, "r") as f:
                file_config = json.load(f)
            
            preprocessing_info.update(file_config)
            print("✅ Preprocessing config loaded and merged successfully!")
            print(f"   - Final config in use: {preprocessing_info}")

        except Exception as e:
            print(f"⚠️  Could not load or merge preprocessing.json, using defaults: {e}")
            print(f"   - Final config in use: {preprocessing_info}")
            
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
    Create a demo CNN model as a fallback.
    """
    global preprocessing_info
    
    preprocessing_info = {
        "target_size": [50, 50],
        "color_mode": "rgb",
        "normalize": True
    }
    
    model = tf.keras.Sequential([
        tf.keras.layers.Conv2D(32, (3, 3), activation='relu', input_shape=(50, 50, 3)),
        tf.keras.layers.BatchNormalization(),
        tf.keras.layers.MaxPooling2D(2, 2),
        tf.keras.layers.Dropout(0.4),
        tf.keras.layers.Conv2D(64, (3, 3), activation='relu'),
        tf.keras.layers.BatchNormalization(),
        tf.keras.layers.MaxPooling2D(2, 2),
        tf.keras.layers.Dropout(0.4),
        tf.keras.layers.Conv2D(128, (3, 3), activation='relu'),
        tf.keras.layers.BatchNormalization(),
        tf.keras.layers.MaxPooling2D(2, 2),
        tf.keras.layers.Dropout(0.4),
        tf.keras.layers.Flatten(),
        tf.keras.layers.Dense(512, activation='relu'),
        tf.keras.layers.Dropout(0.4),
        tf.keras.layers.Dense(2, activation='softmax')  # Corrected to 2-class output
    ])
    
    model.compile(
        optimizer='adam',
        loss='categorical_crossentropy', # Corrected loss for softmax
        metrics=['accuracy']
    )
    
    return model

def load_and_preprocess_image(image_path):
    """
    Preprocess image robustly, handling different channel counts.
    """
    try:
        img = cv2.imread(image_path, cv2.IMREAD_UNCHANGED)
        if img is None:
            raise ValueError(f"Could not read image: {image_path}.")
        
        if len(img.shape) == 2 or img.shape[2] == 1:
            img = cv2.cvtColor(img, cv2.COLOR_GRAY2BGR)
        elif img.shape[2] == 4:
            img = cv2.cvtColor(img, cv2.COLOR_BGRA2BGR)
        
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        
        target_size = tuple(preprocessing_info["target_size"])
        img = cv2.resize(img, target_size, interpolation=cv2.INTER_AREA)
        
        if preprocessing_info["normalize"]:
            img_array = img.astype(np.float32) / 255.0
        else:
            img_array = img.astype(np.float32)
        
        if img_array.shape != (50, 50, 3):
             raise ValueError(f"Final image shape is {img_array.shape}, but model expects (50, 50, 3).")
             
        return img_array
        
    except Exception as e:
        print(f"❌ Error processing {image_path}: {str(e)}")
        return None

def get_className(prediction_prob):
    """
    Map prediction probability to a human-readable class name.
    """
    if prediction_prob >= 0.5:
        return f"⚠️ CANCER DETECTED (Probability: {prediction_prob:.1%})"
    else:
        # For very small probabilities, display a more user-friendly message.
        if prediction_prob < 0.0001:  # This is equivalent to 0.01%
            return "✅ NORMAL (Probability of cancer: &lt; 0.01%)"
        else:
            return f"✅ NORMAL (Probability of cancer: {prediction_prob:.1%})"

def getResult(img_path):
    """
    Get prediction result from the model.
    """
    try:
        img_array = load_and_preprocess_image(img_path)
        if img_array is None:
            return None, 0
            
        img_batch = np.expand_dims(img_array, axis=0)
        predictions = model.predict(img_batch, verbose=0)
        
        # The model output is [prob_normal, prob_cancer]. We need the second value (index 1).
        cancer_probability = predictions[0][1] 
        
        print(f"🔬 Raw prediction: {predictions}")
        print(f"📊 Cancer probability: {cancer_probability:.8f}") # Show more precision in the log
        
        return cancer_probability, cancer_probability * 100
        
    except Exception as e:
        print(f"❌ Error getting result: {e}")
        return None, 0

# --- Flask App Routes ---
print("🚀 Starting CBIS-DDSM Breast Cancer Detection App...")
model = download_cbis_ddsm_model()
print(f'📡 Model loaded. Check http://127.0.0.1:5001/')

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def upload():
    try:
        f = request.files.get('file')
        if not f or f.filename == '':
            return "❌ No file selected"
        
        # You can add the extension check back if you want, but the image processing is robust.
        
        basepath = os.path.dirname(__file__)
        uploads_dir = os.path.join(basepath, 'uploads')
        os.makedirs(uploads_dir, exist_ok=True)
            
        file_path = os.path.join(uploads_dir, secure_filename(f.filename))
        f.save(file_path)
        
        prediction, confidence = getResult(file_path)
        if prediction is None:
            return "❌ Error processing image. Please try again with a different image."
        
        final_result = get_className(prediction)
        
        try:
            os.remove(file_path)
        except Exception as e:
            print(f"⚠️  Could not remove uploaded file: {e}")
        
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
        return f"❌ An unexpected error occurred: {str(e)}"

if __name__ == '__main__':
    app.run(debug=True, port=5001)