
// this listens to content script and receives message, makes the chrome extension active/highlighted.
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.todo == "showPageAction")
    {
        chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
            chrome.pageAction.show(tabs[0].id);
        });
    }
    if (request.todo=="notify")
    {   
        if(request.fetch!="Something went wrong! Please TRY AGAIN")
        {

            if(request.fetch=="India" ){
                chrome.notifications.create('', {
                    title: 'Boycott Videshi, Buy Swadeshi',
                    message: "It is an "+request.fetch+"n product.",
                    iconUrl: 'icon128.png',
                    type: 'basic'
                  });
            }
            else{
                console.log("obj");
                chrome.notifications.create('', {
                    title: 'Boycott Videshi, Buy Swadeshi',
                    message: "It is a "+request.fetch+" product.                                        Say No to Foreign Products                                           Be Vocal,Buy Local",
                    iconUrl: 'icon128.png',
                    type: 'basic'
                  });
            }
        }
        else{
            alert("An error occured!!")
        }
        
    }
    // when the extension is clicked this event is fired
    chrome.pageAction.onClicked.addListener(function(data){
        alert("Please wait... Product details are being fetched.  Make sure your chrome notifications are ON.");
        chrome.tabs.executeScript(null, {file: "popup.js"}
    
                    );
        
    });
    
});

