import os

# Import database primitives
from database import get_table, write_table

# Import the framework
from flask import Flask, g
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS
import markdown
import urllib
import json

# Create an instance of Flask
app = Flask(__name__)
CORS(app)

# Create the API
api = Api(app)

@app.route("/")
def index():
    with open('README.md', 'r') as markdown_file:
        content = markdown_file.read()
        return markdown.markdown(content)

class Authenticator(Resource):
    pass

class Users(Resource):
    def get(self):
        entries, columns = get_table('user')

        return {'message': 'Success', 'data': {'columns':columns, 'entries':entries}}, 200

    def post(self):
        parser = reqparse.RequestParser()

        _, columns = get_table('user')

        columns.remove("id")
        for col in columns:
            parser.add_argument(str(col), required=True)

        # Parse the arguments into an object
        args = parser.parse_args()

        write_table('user', args)

        return {'message': 'User registered', 'data': args}, 201

api.add_resource(Authenticator, '/auth')

api.add_resource(Users, '/users')

app.run(host='0.0.0.0', port=5000, debug=True)
