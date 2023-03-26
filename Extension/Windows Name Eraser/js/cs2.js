//Prevent the website from starting
var a = window.onload;
window.onload = "";

//Remove property
var old = window.name;
window.name = "";

if (old != "" ) {
    console.log("Evaluating results");
    chrome.extension.sendMessage({url: document.domain, caption: old}, function(response) 
    {
        switch (response.radio) {
            case "fallback":
                //White listed: bring back the property
                window.name = old;
                console.log("Window Name Eraser: Whitelisted domain");
                break;
            default:
                console.log("Window Name Eraser: Blocked domain");
                break;
        }
        //Let the website start
        var getType = {};
        if (a && getType.toString.call(a) == '[object Function]') {
            window.onload = function () { a(); }
        }
    });
}
else {
    //Let the website start
    var getType = {};
    if (a && getType.toString.call(a) == '[object Function]') {
        window.onload = function () { a(); }
    }
    console.log("Window Name Eraser: Nothing to block here");
}
