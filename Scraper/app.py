from flask import Flask
from flask import request
from flask_restful import Resource, Api

app=Flask(__name__)
api = Api(app)

class Product_Details(Resource):
    url=None
    def get(self):
        #call to scraper function
        return {"hello":"world"}


    def post(self):
        self.url=request.data
        return 201

api.add_resource(Product_Details,'/details')