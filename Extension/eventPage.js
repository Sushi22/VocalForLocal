chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.todo == "showPageAction")
    {
        chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
            chrome.pageAction.show(tabs[0].id);
        });
    }
    // if(request.todo == "makeApiCall")
    // {
    //     $("document").ready(function(){
    //         $.ajax({
    //             url: "http://localhost:5000/details",
    //             type: "POST",
    //             contentType: "application/json",
    //             data: JSON.stringify({"url": window.location.toString()})
    //         }).done(function(data) {
    //             console.log(data);
    //         });
    // });
    // }
});

