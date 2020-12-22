# VocalForLocal
VocalForLocal  is a chrome extension which is aiming to promote ‘Aatma Nirbhar Bharat’ and ‘Make in India’.This extension is a Page Action as it only operates on certain websites(shopping websites eg. amazon).

# Tech
JavaScript
Python-Flask

# Steps
1. Clone the Repo.
<br>
git clone https://github.com/Sushi22/VocalForLocal.git

2. Run pip -r requirements.txt
3. Install chromedriver of version compatible with your browser.
4. Go to Scraper folder in the project directory. 
5. Open origin_scraper.py file and add the absolute path of your chromedriver.
6. Now to run the Flask server, go to Scraper folder:
        <br>
        cd Scraper
7. Now Run:
        <br>
        py app.py

8. Open your browser and load the extension
    <p>
    <img src="Screenshots/Picture1.png">
    </p>
9. This extension is a Page Action extension, and so it will be activated/highlighted on specific pages(for now it is amazon).
        <br>For other sites, it will be grayed  out.
        <p>
        <img src="Screenshots/Picture2.png">
        </p>
        <p>
        <img src="Screenshots/Picture3.png">
        </p>
10. When user is on a specifc product page like shown below, and clicks on the extension icon origin of the product is shown in the form of a chrome notification(Make sure your chrome notifications are on).
        <p>
            <img src="Screenshots/Picture4.png">
        </p>

# Link for installing Chromdriver
https://chromedriver.chromium.org/downloads


        




