from flask import Flask, render_template, request
import openai
import requests
from flask_cors import CORS
app = Flask(__name__)
CORS(app)



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
    # data = {'message': 'Received parameter value: {}'.format(name), 'post_response': response}

    str = "Problem Report:\n\nPatient Name: Dev Darshan\nAge: 28\nSex: Male\n\nPast Medical History:\n- Palpitations\n- Asthma\n\nPresenting Complaints:\n- Palpitations for the past 6 weeks\n- Symptoms occur at rest, 2-3 times per week, lasting up to 30 minutes\n- Symptoms associated with dyspnea\n- Grade 2/6 holosystolic tricuspid regurgitation murmur present\n\nRemarks/Inference:\nBased on the patient's symptoms of palpitations, dyspnea, and the presence of tricuspid regurgitation murmur, there may be a possibility of underlying cardiac conditions such as mitral valve prolapse, atrial fibrillation, or ventricular tachycardia. Given the patient's young age and absence of significant physical findings, structural heart disease may be less likely. However, further investigations such as an echocardiogram and a Holter monitor may be warranted to evaluate the extent and cause of the palpitations.\n\nSeverity of Disease Symptom:\nDue to the presence of dyspnea and the potential cardiac involvement, this case should be prioritized for further evaluation and management to rule out any serious cardiac conditions.\n\nStatus: Pending\n\nPlease review the patient's history and consider ordering appropriate investigations to determine the underlying cause of the palpitations and dyspnea. Thank you."

    return str


# Define the default route to return the index.html file
@app.route("/")
def index():
    return render_template("index.html")
    

if __name__=='__main__':
    app.run(debug=True, port=5004)
