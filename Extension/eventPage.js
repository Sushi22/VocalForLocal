chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.todo == "showPageAction")
    {
        chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
            chrome.pageAction.show(tabs[0].id);
        });
    }
    chrome.pageAction.onClicked.addListener(function(){

        chrome.tabs.executeScript(null, {file: "popup.js"},
        
            function(obj){
                        if(obj.headquarters=="India"){
                        chrome.notifications.create('', {
                            title: 'Boycott Videshi, Buy Swadeshi',
                            message: 'It is an Indian product',
                            iconUrl: 'icon128.png',
                            type: 'list'
                          });
                    }
                    else{
                        chrome.notifications.create('', {
                            title: 'Boycott Videshi, Buy Swadeshi',
                            message:"",
                            iconUrl: 'icon128.png',
                            type: 'basic'
                          });
                    }});
        
    });
    
});

