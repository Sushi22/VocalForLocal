from bs4 import BeautifulSoup
import requests
import json

query="oneplus"
url="https://www.google.com/search?sxsrf=ALeKk01duLOo8_eBQ2krwdinfVcI549Asw%3A1605793690226&source=hp&ei=mne2X7yeC5LH4-EPvqS8mAk&q={}+company".format(query)
data=requests.get(url)
soup = BeautifulSoup(data.content, 'html.parser')
# print(soup.prettify())
spans=soup.find_all('span',attrs={'class':'LrzXr kno-fv'})
print(spans)
for span in spans:
    links = span.find_all('a')
    for link in links:
        print(link)
