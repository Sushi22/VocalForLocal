import selenium
import requests
import json

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait 
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By



def get_origin(name):

    chrome_options = Options()
    
    chrome_options.add_argument("--headless")

    chrome_driver = 'F:/Python_Files/chromedriver.exe'

    driver = webdriver.Chrome(options=chrome_options,executable_path=chrome_driver)

    query=name

    url="https://www.google.com/search?q={}+company+wikipedia".format(query)

    driver.get(url)

    try:

        div=driver.find_element_by_class_name("yuRUbf")

        link=div.find_element_by_tag_name('a')

        link.click()

        element = WebDriverWait(driver, 7).until( 
        EC.presence_of_element_located((By.CLASS_NAME, "country-name"))) 

        country_name=driver.find_element_by_class_name("country-name")


        driver.execute_script("arguments[0].scrollIntoView();", country_name)


        print(country_name.text)

        res=country_name.text

        return(str(res))

    except Exception as e:
        print(e)
        return("Something went wrong! Please TRY AGAIN")

# get_origin("panasonic")
