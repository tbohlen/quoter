function loadQuotes() {
	const quotesWrapper = document.getElementById("quotes");
	quotesWrapper.innerHTML = "";
	chrome.storage.sync.get("quotes", results => {
		const {quotes} = results;
		quotes.forEach(quote => {
			var quoteParts = quote.split("//qtr//");
			console.log("Parts are " + JSON.stringify(quoteParts));
			if(quoteParts[0].length == 0) {
				var text = quoteParts[0];
				quotesWrapper.innerHTML += "<div class='quote'>\"" + text + "\"</br></br><span class='sourceLink'>No Source Found</span><button class='deleteButton'>Delete</button></div>";
			}
			else {
				var link = quoteParts[0];
				var text = quoteParts[1];
				quotesWrapper.innerHTML += "<div class='quote'>\"" + text + "\"</br></br><a class='sourceLink' target='_blank' href='" + link + "'>Source</a><button class='deleteButton'>Delete</button></div>";
			}
		});
	});
}

function deleteQuote(evt) {
	var property = evt.srcElement.parentNode.id;
	console.log("deleting " + property);
	delete localStorage[property];
	$("#" + property).remove();
}

document.addEventListener("DOMContentLoaded", () => {
	loadQuotes();
	// need to add the deleteQuote button back to buttons
});
