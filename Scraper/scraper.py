from bs4 import BeautifulSoup
import requests
import json

HEADERS = ({'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36',
            'Accept-Language': 'en-US, en;q=0.5'})

def scrap_amazon(url):
    
    try:
        print(url)
        data=requests.get(url,headers=HEADERS)
        soup = BeautifulSoup(data.content, 'html.parser')
        results=soup.find('span',id='productTitle').text
        results=results.strip()
        print(results)
        l=list(results.split(" "))
        print(l[0])
        return str(l[0])

    except Exception as e:
        print(e)
        return None
