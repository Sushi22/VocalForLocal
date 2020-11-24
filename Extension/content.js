// this sends message to eventPage.js when user enters the site permitted in manifest.json i.e. Amazon.com etc.

chrome.runtime.sendMessage({todo: "showPageAction"}); 

