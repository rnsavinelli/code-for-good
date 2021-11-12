import os

# Import database primitives
from database import *

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
    with open(os.path.dirname(app.root_path) + '/server/README.md', 'r') as markdown_file:
        content = markdown_file.read()
        return markdown.markdown(content)

class Authenticator(Resource):
    def get(self):
        pass

    def post(self):
        parser = reqparse.RequestParser()

        parser.add_argument("username", required=True)
        parser.add_argument("password", required=True)

        # Parse the arguments into an object
        args = parser.parse_args()

        print(args)

        data, columns = get_user_by_credentials('credential', args['username'], args['password'])

        if data != None:
            return {'message': 'Success', 'data': {'columns':columns, 'entry': data}}, 200
        else:
            return {'message': 'User not found', 'data': {}}, 404

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

        parser.add_argument("username", required=True)
        parser.add_argument("password", required=True)

        # Parse the arguments into an object
        args = parser.parse_args()

        credentials = {
                'username': args.pop('username'),
                'password': args.pop('password')
        }

        user_id = write_table('user', args)
        if user_id != -1:
            credentials['user_id'] = user_id
            args['id'] = user_id
            write_table('credential', credentials)
            return {'message': 'User registered', 'data': args}, 201
        else:
            return {'message': 'Failed to register user', 'data': {}}, 500

class User(Resource):
    def get(self, identifier):
        entries, columns = get_table('user')

        for entry in entries:
            if str(identifier) == str(entry[0]):
                tags, _ = get_user_tags(entry[0])
                tag_names, tag_columns = get_tag_names(list(map(lambda x: x[1] ,tags)))

                return {'message': 'User found', 'data': {'columns':columns, 'entry':entry, 'tags': {'columns': tag_columns, 'entries': tag_names}}}, 200

        return {'message': 'User not found', 'data': {}}, 404

class Degree(Resource):
    def get(self):
        entries, _ = get_table('degree')
        return {'message': 'Titulos obtenidos exitosamente', 'data': entries}, 201

api.add_resource(Authenticator, '/auth')

api.add_resource(Users, '/users')

api.add_resource(User, '/user/<string:identifier>')

api.add_resource(Degree, '/degree')

app.run(host='0.0.0.0', port=5000, debug=True)
