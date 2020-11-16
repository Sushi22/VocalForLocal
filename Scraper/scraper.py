from bs4 import BeautifulSoup
import requests
import json

HEADERS = ({'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36',
            'Accept-Language': 'en-US, en;q=0.5'})

def scrap_amazon():
    data=requests.get("https://www.amazon.in/Test-Exclusive-748/dp/B07DJLVJ5M/",headers=HEADERS)
    soup = BeautifulSoup(data.content, 'html.parser')
    results=soup.find('span',attrs={'class':'a-size-large product-title-word-break'}).text
    results=results.strip()
    print(results)
    l=list(results.split(" "))
    print(l[0])
    return l[0]

scrap_amazon()

