function contextMenuCallback() {
	// does nothing at the moment
}

function handleContextMenuClick(info, tab) {
	if (info.menuItemId === "createQuotes") {
		return saveQuotation(info, tab);
	}
	return null;
}

function saveQuotation(info, tab) {
	chrome.storage.sync.get(["quotes"], results => {
		let quotes = results.quotes;
		if (typeof(quotes) == "undefined" || quotes == null) {
			quotes = [];
		}

		if (info.selectionText && info.selectionText.length !== 0) {
			if(typeof(info.pageUrl) == "undefined" || info.pageUrl == null) {
				info.pageURL = "";
			}
			quotes.push(`${info.pageUrl.toString()}//qtr//${info.selectionText}`);
			chrome.storage.sync.set({quotes});
		}
	});
}

var result = chrome.contextMenus.create({
	id: "createQuotes",
	type: "normal",
	title: "Save Quote",
	contexts: ["selection"]
}, contextMenuCallback);

chrome.contextMenus.onClicked.addListener(handleContextMenuClick)
