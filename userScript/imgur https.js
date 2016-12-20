// ==UserScript==
// @name		imgur https
// @description		imgur automatic move from http to https
// @include		http://imgur.com/*
// @include		http://i.imgur.com/*
// @grant		none
// ==/UserScript==

(function(){
  var debug = 0;
  var new_location = location.href.replace(/http\:/, 'https:');
  if ( debug > 0 ) {
    alert(  "Hash:     "+location.hash+
          "\nHost:     "+location.host+
          "\nHostname: "+location.hostname+
          "\nHREF:     "+location.href+
          "\nPathname: "+location.pathname+
          "\nPort:     "+location.port+
          "\nProtocol: "+location.protocol+
          "\n"+
          "\nNew Location: "+new_location);
  };
  location.href = new_location;
})();
