chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.todo == "showPageAction")
    {
        chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
            chrome.pageAction.show(tabs[0].id);
        });
    }
    chrome.pageAction.onClicked.addListener(function(){
        chrome.tabs.executeScript(null, {file: "popup.js"},
        
            function() {
                var temp=""
                if(localStorage.getItem("my_data")==undefined)
                {
                    temp="LOADING....PLease wait";
                    chrome.notifications.create('', {
                        title: 'Boycott Videshi, Buy Swadeshi',
                        message: temp,
                        iconUrl: 'icon128.png',
                        type: 'list'
                    });
                }
                
                else{
                    temp=localStorage.getItem("my_data")
                    chrome.notifications.create('', {
                        title: 'Boycott Videshi, Buy Swadeshi',
                        message: temp,
                        iconUrl: 'icon128.png',
                        type: 'basic'
                    });
                }

              
            });
        
    });
    
});

