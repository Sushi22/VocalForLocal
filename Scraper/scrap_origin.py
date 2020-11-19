from bs4 import BeautifulSoup
import requests
import json


query="oneplus"
url="https://en.wikipedia.org/wiki/{}".format(query)

# print(url)

data=requests.get(url)

soup=BeautifulSoup(data.content, 'html.parser')

table=soup.find('div',attrs={'id':'mw-content-text'})

# print(table)

table_child=table.find('div',attrs={'class':'mw-parser-output'})

inner_table=table_child.find('table',attrs={'class':'infobox vcard'})

# print(inner_table)

body=inner_table.find('tbody')

my_l=list(body.find_all('tr'))

for i in range(4,len(my_l)):
    if str(my_l[i].find('th').text) == "Headquarters":
        origin= my_l[i].find('td')
        break

print(origin)

print(origin.find_all(text=True,recursive=True))




