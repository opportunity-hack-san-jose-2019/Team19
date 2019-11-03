"""This module will serve the api request."""

import numpy as np
import json
from flask import Flask, request, jsonify
import pickle
app = Flask(__name__)
model = pickle.load(open('knn.pickle','rb'))


@app.route('/')
def recommend():
    data = [[50, 2, 0.1, 1.0,3.0, 0.0, 0.2, 0.0, 1.0, 50.0, 1.5]]
    data = [[0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
    prediction = model.predict(np.asarray(data))
    prediction = model.kneighbors(data)
    json_string = json.dumps(prediction[1].tolist())

    return json_string


@app.route("/api/v1/recommender", methods=['GET','POST'])
def parse_request():
    """
       Function to Add recommender data 
       """
    try:
    	print("Hi")
    	data = request.data
    	data = data.json()
    	prediction = model.predict(np.asarray(data))
    	prediction = model.kneighbors(data)
    	json_string = json.dumps(prediction[1].tolist())

    except:
    	return "", 400

        

@app.route("/api/v1/getter", methods=['GET'])
def get_recommender_data():
    """
       Function to get sensors data.
       """
    try:
        query_params = helper_module.parse_query_params(request.query_string)
        # Check if dictionary is not empty
        if query_params:

            query = {k: int(v) if isinstance(v, str) and v.isdigit() else v for k, v in query_params.items()}

            records_fetched = collection.find(query)

            if records_fetched.count() > 0:
                return dumps(records_fetched)
            else:
                return "", 404

        # If dictionary is empty
        else:
            if collection.find().count > 0:
                return dumps(collection.find())
            else:
                return jsonify([])
    except:
        return "", 500


if __name__ == '__main__':
    app.run()


