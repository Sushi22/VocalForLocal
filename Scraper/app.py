from flask import Flask
from flask import request
from flask_restful import Resource, Api, reqparse
from scraper import *
from origin_scraper import *
from flask_cors import CORS, cross_origin
import json
import time

app=Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
api = Api(app)

parser = reqparse.RequestParser()
parser.add_argument('url')

class Product_Details(Resource):
    url=None
    def get(self):
        print(Product_Details.url)
        #call to scraper functio
        url=Product_Details.url
        result=scrap_amazon(url)
        company=get_origin(result)
        return json.dumps({"headquarters":company})
        

    def post(self):
        args=parser.parse_args()
        url=Product_Details.url
        Product_Details.url= args['url']
        print(url)
        return 201

api.add_resource(Product_Details,'/details')

if __name__ == "__main__":
    app.run()