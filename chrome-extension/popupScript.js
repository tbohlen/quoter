qtrLoadQuotes = function() {
	$("#quotes").empty();
	for(var prop in localStorage) {
	    if(localStorage.hasOwnProperty(prop)) {
			var val = localStorage[prop];
	    	if(prop.substring(0, 3) == "qtr" && prop !== "qtrCount") {
				var parts = val.split("//qtr//");
				console.log("Parts are " + JSON.stringify(parts));
				if(parts[0].length == 0) {
					var quote = parts[0];
					$("#quotes").append("<div class='quote' id='" + prop + "'>\"" + quote + "\"</br></br><span class='sourceLink'>No Source Found</span><button class='deleteButton'>Delete</button></div>");
				}
				else {
					var link = parts[0];
					var quote = parts[1];
					$("#quotes").append("<div class='quote' id='" + prop + "'>\"" + quote + "\"</br></br><a class='sourceLink' target='_blank' href='" + link + "'>Source</a><button class='deleteButton'>Delete</button></div>");
				}
	    	}
	    }
	}
}
	
qtrDeleteQuote = function(evt) {
	var property = evt.srcElement.parentNode.id;
	console.log("deleting " + property);
	delete localStorage[property];
	$("#" + property).remove();
}

$(document).ready(function() {
	qtrLoadQuotes();
	$(".deleteButton").click(qtrDeleteQuote);
});