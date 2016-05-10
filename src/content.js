var isBackgroundColorActive = false;

var CardBackColorConfig = {
	RedCardColor: "rgba(255,0,0,0.5)",
	GreenCardColor: "rgba(0,255,0,0.5)",
	BlueCardColor: "rgba(0,0,255,0.5)",
	PurpleCardColor: "rgba(128,0,128,0.5)",
	YellowCardColor: "rgba(255,255,0,0.5)",
	OrangeCardColor: "rgba(255,165,0,0.5)"
};

var onMessageCallback = function(request, sender, sendResponse) {
  if (isBackgroundColorActive)
  {
	RemoveCardsBackground();
	isBackgroundColorActive = false;
  }
  else
  {	
	ApplyCardsBackground(); 
	isBackgroundColorActive = true;
  }
  
  chrome.runtime.sendMessage({"isBackgroundColorActive": isBackgroundColorActive});
};

var ApplyCardsBackground = function() {
    $(".list-card:has(.card-label-red)").css("background-color", CardBackColorConfig.RedCardColor);
	$(".list-card:has(.card-label-green)").css("background-color", CardBackColorConfig.GreenCardColor);
	$(".list-card:has(.card-label-blue)").css("background-color", CardBackColorConfig.BlueCardColor);
	$(".list-card:has(.card-label-purple)").css("background-color", CardBackColorConfig.PurpleCardColor);
    $(".list-card:has(.card-label-yellow)").css("background-color", CardBackColorConfig.YellowCardColor);
    $(".list-card:has(.card-label-orange)").css("background-color", CardBackColorConfig.OrangeCardColor);
};

var RemoveCardsBackground = function() {
    $(".list-card:has(.card-label-purple)").css("background-color", "");
    $(".list-card:has(.card-label-green)").css("background-color", "");
    $(".list-card:has(.card-label-yellow)").css("background-color", "");
    $(".list-card:has(.card-label-orange)").css("background-color", "");
    $(".list-card:has(.card-label-red)").css("background-color", "");
    $(".list-card:has(.card-label-blue)").css("background-color", "");
};

chrome.runtime.onMessage.addListener(onMessageCallback);

