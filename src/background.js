chrome.runtime.onInstalled.addListener(function() {
  // Replace all rules ...
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // That fires when a page's URL contains a 'trello' ...
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'trello.com/b' },
          })
        ],
        // And shows the extension's page action.
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});

function sendClickMessage() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var currentTab = tabs[0].id;
    chrome.tabs.sendMessage(currentTab, "");
  });
};

function onMessageCallback (request, sender, sendResponse) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		var currentTab = tabs[0].id;
		  if (request.isBackgroundColorActive)
		  {
			  chrome.pageAction.setIcon({path:"iconNoBackground16.png",
											tabId:currentTab});
		  }
		  else
		  {	
			  chrome.pageAction.setIcon({path:"iconBackground16.png",
											tabId:currentTab});
			}
		});
};

chrome.pageAction.onClicked.addListener(sendClickMessage);

chrome.runtime.onMessage.addListener(onMessageCallback);