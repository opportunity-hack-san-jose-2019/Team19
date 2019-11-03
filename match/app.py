import numpy as np
import json
from flask import Flask, request, jsonify
import pickle
app = Flask(__name__)
model = pickle.load(open('knn.pickle','rb'))


@app.route('/')
def recommend():
    #data = [[50, 2, 0.1, 1.0,3.0, 0.0, 0.2, 0.0, 1.0, 50.0, 1.5]]
    data = [[0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
    #prediction = model.predict(np.asarray(data))
    prediction = model.kneighbors(data)
    json_string = json.dumps(prediction[1].tolist())

    return json_string

if __name__ == '__main__':
    app.run()
