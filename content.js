chrome.extension.onMessage.addListener(function(message) {
    console.log(message.msg);
    alert(message.msg);
});