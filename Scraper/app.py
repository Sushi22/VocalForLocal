from flask import Flask
from flask import request
from flask_restful import Resource, Api
from scraper import *

app=Flask(__name__)
api = Api(app)

class Product_Details(Resource):
    url=None
    def get(self):
        #call to scraper function
        result=scrap_amazon()
        return {"url":result}

    def post(self):
        self.url=request.data
        print(self.url)
        return 201

api.add_resource(Product_Details,'/details')

if __name__ == "__main__":
    app.run()