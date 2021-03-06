const StoryFormat = require('./StoryFormat.js');
/**
 * @class StoryFormatParser
 * @module StoryFormatParser
 */
class StoryFormatParser {
	/**
	 * @function StoryFormatParser
	 * @class
	 * @param {string} contents - Story Format file to read
	 */
	constructor(contents = ' ') {
		this.storyformat = null;

		this.parse(contents);
	}

	/**
	 * Parse a Story Format file
	 *
	 * @param {string} file - File to read
	 * @returns {void}
	 */
	parse(contents) {
		// Harlowe has malformed JSON, so we have to test for it
		const harlowePosition = contents.indexOf('harlowe');

		if (harlowePosition !== -1) {
			// The 'setup' property is malformed
			const setupPosition = contents.lastIndexOf(',"setup": function');
			contents = contents.slice(0, setupPosition) + '}';
		}

		const openingCurlyBracketPosition = contents.indexOf('{');
		const closingCurlyBracketPosition = contents.lastIndexOf('}');

		if (openingCurlyBracketPosition !== -1 && closingCurlyBracketPosition !== -1) {
			// Slice out the JSON
			contents = contents.slice(openingCurlyBracketPosition, closingCurlyBracketPosition + 1);
		} else {
			throw new Error('Unable to find Twine2 JSON chunk!');
		}

		let jsonContent = '';

		try {
			jsonContent = JSON.parse(contents);
		} catch (event) {
			throw new Error('Unable to parse Twine2 JSON chunk!');
		}

		this.storyformat = new StoryFormat(jsonContent);
	}
}

module.exports = StoryFormatParser;
