import os

# Import the framework
from flask import Flask, g
from flask_restful import Resource, Api, reqparse
import markdown
import urllib

# Create an instance of Flask
app = Flask(__name__)

# Create the API
api = Api(app)

@app.route("/")
def index():
    with open(os.path.dirname(app.root_path) + '/README.md', 'r') as markdown_file:
        content = markdown_file.read()
        return markdown.markdown(content)

app.run(host='0.0.0.0', port=5000, debug=True)
