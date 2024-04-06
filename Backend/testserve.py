from flask import Flask, jsonify, request
from Bio_Epidemiology_NER.bio_recognizer import ner_prediction
import os
os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'
import pandas as pd
import matplotlib.pyplot as plt
from matplotlib.backends.backend_pdf import PdfPages
import requests
import json



def truncate(value, length=20):
    if isinstance(value, str):
        if len(value) > length:
            return value[:length] + '...'
    return str(value)

def make_post_request(name):
    url = 'http://localhost:3000'
    form = '/form'
    res = requests.post(url + form, json={"name": name})
    if res.status_code == 200:
        # listo = list(res.json().items())
        # print(listo)
        return res.json()
    else:
        return f"Error: {res.status_code}"

#######################################################

app = Flask(__name__)
Person = None
present_case = None
@app.route('/api/data', methods=['GET'])
def get_data():
    # Access URL parameters using request.args
    name = request.args.get('name')  # Access the value of 'name' parameter

    # Store the name in a variable called Person
    Person = name

    # Make the POST request with the Person variable
    response = make_post_request(Person)
    # print(response)

    # Print the name in the terminal
    print("Name stored in Person:", Person)

    # Your logic to handle the URL parameters goes here
    # You can perform further processing or return a response as needed
    data = {'message': 'Received parameter value: {}'.format(name), 'post_response': response}
    # Parse the JSON string into a Python dictionary
    # response_dict = json.loads(response)

    # Extract the value of 'presentCase' from the response
    present_case = response['details']['user']['presentCase']

    
    df = ner_prediction(corpus=present_case, compute='gpu') #pass compute='gpu' if using gpu
    df = df.applymap(truncate)

    print(df)

    print("Present Case:", present_case)
    return df.values.tolist()


####################################################################################




if __name__ == '__main__':
    app.run(debug=True, port = 6067)
