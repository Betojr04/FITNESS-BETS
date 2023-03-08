"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
import jwt
import hashlib

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/createuser', methods=['POST', 'GET'])
def handle_create_user():
    data = request.get_json()
    username = data['username']
    password = data['password']
    email = data['email']

@app.route('/api/login', methods=['POST'])
def login():
    # Get user data from request
    data = request.get_json()
    username = data['username']
    password = data['password']
