/*
  Message handling with content-script
*/
chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (blockDomain(request.url)) {
            showBlockedPageAction(sender.tab.id, request.caption);
            sendResponse({radio:""});
        }
        else {
            showAllowedPageAction(sender.tab.id, request.caption);
            sendResponse({radio:"fallback"});
        }
    }
);

function showBlockedPageAction(tid, caption) {
    chrome.pageAction.setIcon({tabId: tid, path: "/icons/16.png"});
    chrome.pageAction.setTitle({tabId: tid, title: "Blocked window.name content: "+caption});
    chrome.pageAction.show(tid);
}

function showAllowedPageAction(tid, caption) {
    chrome.pageAction.setIcon({tabId: tid, path: "/icons/16bw.png"});
    chrome.pageAction.setTitle({tabId: tid, title: "Did not block window.name content "+caption});
    chrome.pageAction.show(tid);
}

function blockDomain(domain) {
  var setting = localStorage["overall_whitelist"];
  if (isUnDef(setting) || (setting == "")) return true;
  if (setting == "") return true;
  setting = setting.split("\n");
  for (var i=0;i<setting.length;i++) {
    if (setting[i] == domain) {
      return false;
    }
  }
  return true;
}

function isUnDef(old_setting) {
  return (typeof old_setting == "undefined") || (null==old_setting);
}
