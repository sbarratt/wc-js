wc = {

	characterCount: function(text) {
		return text.length;
	},

	words: function(text) {
		words_list = [];
		current_word = "";
		for (i in text) {
			c = text[i];
			if (c == " ") {
				if (current_word != "") {
					words_list.push(current_word);
					current_word = "";
				}
			}
			else if (c == "." || c == "?" || c == "!") {
				if (current_word != "") {
					words_list.push(current_word);
					current_word = "";
				}
			}
			else {
				current_word += c;
			}
		}
		if (current_word != "") {
			words_list.push(current_word);
			current_word = "";
		}
		return words_list;
	},

	wordCount: function(words) {
		return words.length;
	},

	sentenceCount: function(text) {
		periods      = (text.match(/\./g) || []).length;
		questions    = (text.match(/\?/g) || []).length;
		exclamations = (text.match(/!/g) || []).length;
		return periods + questions + exclamations;
	},

	getStats: function(text) {
		text = text.replace(/\r?\n|\r/g, '');
		words = this.words(text);
		console.log(words);

		return { characters: this.characterCount(text),
				 words: this.wordCount(words), 
				 sentences: this.sentenceCount(text)}
 	}
}

// http://stackoverflow.com/questions/2783604/how-to-clear-textarea-on-click