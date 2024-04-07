import cv2
from keras.models import load_model
from PIL import Image
import numpy as np


model = load_model('PneumoniaModelCategorical.h5')

image_directory='datasets/'
image = cv2.imread("C:\\Users\\devda\\OneDrive\\Desktop\\dev\\hoftrys\\chest\\datasets\\PNEUMONIA\\person171_bacteria_826.jpeg")
# image=cv2.imread(image_directory + 'no/1 no.jpeg')

img = Image.fromarray(image, 'RGB')
img = img.resize((64, 64))
img = np.array(img)

input_img = np.expand_dims(img, axis=0)

result = model.predict(input_img)
result_final=np.argmax(result,axis=1)

print(result_final)