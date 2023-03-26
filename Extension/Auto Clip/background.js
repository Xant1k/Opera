function onClipboardMessage(request, sender, sendResponse) {
    if (request.action === "copy") { 
        txtarea = document.createElement('textarea');
        document.body.appendChild(txtarea);
        txtarea.value = request.txt;
        txtarea.select();
        copytext = document.execCommand("copy");
        // console.log("copied!");
        document.body.removeChild(txtarea);
    }}
chrome.extension.onMessage.addListener(onClipboardMessage);
var t = '';
function gText(e) {
    t = (document.all) ? document.selection.createRange().text : document.getSelection();
    chrome.extension.sendMessage({
        cmd: "clipboard", 
        action: "copy",
        txt: t.toString()
    });
}
document.onmouseup = gText;
if (!document.all) document.captureEvents(Event.MOUSEUP);
