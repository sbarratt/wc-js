var num_tests = 1;
var passed = 0;
var failed = 0;

test = function(a,b,label) {
	span = document.createElement('span');
	br = document.createElement("br");
	if (a == b) {
		span.innerHTML = label + ": Passed";
		span.style.color="green";
		passed++;
	}
	else {
		span.innerHTML = label + ": Failed ["+a+" != "+b+"]";
		span.style.color="red";
		failed++;
	}
	num_tests++;
	document.getElementById("test-results").appendChild(span);
	document.getElementById("test-results").appendChild(br);
}

countPassFail = function() {
	testresults = document.getElementById("test-results");

	br = document.createElement("br");
	testresults.insertBefore(br,testresults.firstChild);
	br = document.createElement("br");
	testresults.insertBefore(br,testresults.firstChild);
	span = document.createElement('span');
	span.innerHTML = 'Passed('+passed+'), Failed('+failed+')';
	testresults.insertBefore(span,testresults.firstChild);
}


tests = function() {
	document.getElementById("test-results").innerHTML="";
	passed = 0;
	failed = 0;

	// Include Tests to Run here

	generic = "Hello my name is Shane.";
	doublespace = "How are you?  I am doing very well.";
	allthree = "This is a long sentence. This is a longer sentence! Kind of?";
	word = "word";

	generic = wc.getStats(generic);
	doublespace = wc.getStats(doublespace);
	allthree = wc.getStats(allthree);
	word = wc.getStats(word);

	checkStats = function(a, values, label) {
		test(a.characters, values[0], label + "- Characters");
		test(a.words, values[1], label + "- Words");
		test(a.sentences, values[2], label + "- Sentences");
	};

	checkStats(generic, [23,5,1], "Generic");
	checkStats(doublespace, [35,8,2], "Double Space");
	checkStats(allthree, [60,12,3], "All Three");
	checkStats(word, [4,1,0], "Single Word");


	countPassFail();
}