window.onload = function() {
    document.getElementById("clickMe").onclick = function() {
        chrome.extension.sendMessage({msg: "hello"});
    }
}