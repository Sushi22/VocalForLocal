import selenium
import requests
import json

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options

chrome_options = Options()
chrome_options.add_argument("--headless")
chrome_driver = 'F:/Python_Files/chromedriver.exe'

driver = webdriver.Chrome(chrome_options=chrome_options,executable_path=chrome_driver)


def get_origin(name):
    query=name


    url="https://www.google.com/search?q={}+company+wikipedia".format(query)

    driver.get(url)

    try:

        link=driver.find_element_by_xpath("//*[@id='rso']/div[1]/div/div/div/div[1]/a")

        link.click()

        country_name=driver.find_element_by_class_name("country-name")


        driver.execute_script("arguments[0].scrollIntoView();", country_name)


        print(country_name.text)

        res=country_name

        return(str(res))

    except Exception as e:
        return("Something went wrong! Please TRY AGAIN")


get_origin("oneplus")