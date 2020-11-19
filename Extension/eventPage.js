chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.todo == "showPageAction")
    {
        chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
            chrome.pageAction.show(tabs[0].id);
        });
    }
    chrome.pageAction.onClicked.addListener(function(){
        chrome.tabs.executeScript(null, {file: "popup.js"}); 
        
    });
    
});

