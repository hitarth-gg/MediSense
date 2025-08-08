import cv2
import os
from PIL import Image
import tensorflow as tf
from tensorflow import keras
import numpy as np
from sklearn.model_selection import train_test_split
from keras.utils import normalize
from keras.models import Sequential
from keras.layers import Dense, Conv2D, MaxPooling2D, Flatten, Dropout, Activation
from keras.utils import to_categorical

image_directory='datasets/'
no_tumor_images=os.listdir(image_directory + 'NORMAL/')
yes_tumor_images=os.listdir(image_directory + 'PNEUMONIA/')
dataset=[]
label = []

INPUT_SIZE = 64


for i, image_name in enumerate(no_tumor_images):
    if(image_name.split('.')[1]=='jpeg'):
        image = cv2.imread(image_directory + 'NORMAL/' + image_name)
        image = Image.fromarray(image, 'RGB')
        image = image.resize((INPUT_SIZE, INPUT_SIZE))
        dataset.append(np.array(image))
        label.append(0)

for i, image_name in enumerate(yes_tumor_images):
    if(image_name.split('.')[1]=='jpeg'):
        image = cv2.imread(image_directory + 'PNEUMONIA/' + image_name)
        image = Image.fromarray(image, 'RGB')
        image = image.resize((INPUT_SIZE, INPUT_SIZE))
        dataset.append(np.array(image))
        label.append(1)

# print(len(dataset))
# print(len(label))
        
dataset = np.array(dataset)
label = np.array(label)

x_train, x_test, y_train, y_test = train_test_split(dataset, label, test_size=0.2, random_state=0)

# Reshape = (n, image_width, image_height, n_channel)

# print(x_train.shape)

x_train = normalize(x_train, axis=1)
x_test = normalize(x_test, axis=1)

y_train = to_categorical(y_train, 2)
y_test = to_categorical(y_test, 2)

# Model Building

model=Sequential()

# 64.64.3
model.add(Conv2D(32, (3,3), input_shape=(INPUT_SIZE, INPUT_SIZE, 3)))
model.add(Activation('relu'))
model.add(MaxPooling2D(pool_size=(2,2)))

model.add(Conv2D(32, (3,3), kernel_initializer='he_uniform'))
model.add(Activation('relu'))
model.add(MaxPooling2D(pool_size=(2,2)))

model.add(Conv2D(32, (3,3), kernel_initializer='he_uniform'))
model.add(Activation('relu'))
model.add(MaxPooling2D(pool_size=(2,2)))

model.add(Flatten())
model.add(Dense(64))
model.add(Activation('relu'))
model.add(Dropout(0.5))
model.add(Dense(2))
model.add(Activation('softmax'))

# Binary CrossEntropy = 1, sigmoid
# Categorical Cross Entropy = 2 , softmax

model.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy'])

model.fit(x_train, y_train, batch_size=16,verbose = 1,  epochs=40, validation_data=(x_test, y_test), shuffle = False)

model.save('PneumoniaModelCategorical.h5')