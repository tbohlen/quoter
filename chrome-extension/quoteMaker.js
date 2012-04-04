contextMenuCallback = function() {
	// does nothing at the moment
}

saveQuotation = function(info, tab) {
	if(typeof(localStorage.qtrCount) == "undefined" || localStorage.qtrCount == null) {
		localStorage.qtrCount = 0;
	}
	
	if(info.selectionText && info.selectionText.length != 0) {
		if(typeof(info.pageUrl) == "undefined" || info.pageUrl == null) {
			info.pageURL = "";
		}
		localStorage["qtr"+localStorage.qtrCount.toString()] = info.pageUrl.toString() + "//qtr//" + info.selectionText;
		localStorage.qtrCount++;
	}
}

var result = chrome.contextMenus.create({
	"type":"normal"
	, "title":"Save Quote"
	, "contexts": ["selection"]
	, "onclick": saveQuotation
}, contextMenuCallback);