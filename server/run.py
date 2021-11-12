import os

# Import database primitives
from database import get_table

# Import the framework
from flask import Flask, g
from flask_restful import Resource, Api, reqparse
import markdown
import urllib
import json

# Create an instance of Flask
app = Flask(__name__)

# Create the API
api = Api(app)

@app.route("/")
def index():
    with open('README.md', 'r') as markdown_file:
        content = markdown_file.read()
        return markdown.markdown(content)

class UserList(Resource):
    def get(self):
        entries, columns = get_table('user')

        return {'message': 'Success', 'data': {'columns':columns, 'entries':entries}}, 200


api.add_resource(UserList, '/users')

app.run(host='0.0.0.0', port=5000, debug=True)
