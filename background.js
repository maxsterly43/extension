chrome.extension.onMessage.addListener(function(message) {
  chrome.tabs.getSelected(null, function(tab){
    chrome.tabs.sendMessage(tab.id, {msg: message.msg});
  });
});