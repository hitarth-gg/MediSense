from flask import Flask, render_template, request
import openai
import requests

app = Flask(__name__)

# Set up OpenAI API credentials
# openai.api_key = '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'
# openai.api_key = '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'
openai.api_key = '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'

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
    data = {'message': 'Received parameter value: {}'.format(name), 'post_response': response}
    
    user_dict = data['post_response']['details']['user']
    # Initialize an empty string variable
    key_value_pairs_str = ''

    # Iterate over the key-value pairs and concatenate them to the string variable
    for key, value in user_dict.items():
        key_value_pairs_str += f"{key}: {value}\n"

    key_value_pairs_str += "\n\n Generate a detailed problem report with your own remarks/inference (possibility of disease) (also add a severity of disease symptom  so could the case could be prioritized) to be presented to the Doctor."

    gptresponse = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[{"role": "user", "content": key_value_pairs_str}]
    )
    if gptresponse.choices[0].message!=None:
        print(gptresponse.choices[0].message["content"])

    else :
        print('Failed to Generate response!')
    
    # print(gptresponse)
    # print("Present Case:", present_case)
    return gptresponse.choices[0].message["content"]


# Define the default route to return the index.html file
@app.route("/")
def index():
    return render_template("index.html")
    

if __name__=='__main__':
    app.run(debug=True, port=5004)
