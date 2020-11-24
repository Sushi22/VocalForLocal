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
    def get(self):                                  # this function call to the scraper function 
        print(Product_Details.url)
        url=Product_Details.url                 
        result=scrap_amazon(url)                    # result contains the comapny/brand name from the url received from ajax from client
        origin=get_origin(result)                   # origin contains the origin/country to which the brand belongs
        return json.dumps({"headquarters":origin})  # return response as json(country name) to the user/client.
        

    def post(self):
        args=parser.parse_args()                    # parsing the url posted to this endpoint from ajax
        Product_Details.url= args['url']            # taking it in the static variable 'url'.
        return 201

api.add_resource(Product_Details,'/details')

if __name__ == "__main__":
    app.run()