/**
 * @external Story
 * @see Story.js
 */

const Story = require('./Story.js');

/**
 * @class TweeWriter
 * @module TweeWriter
 */
class TweeWriter {
  /**
   * @function TweeWriter
   * @class
   * @param {Story} story - Story object to write
   * @param {string} file - File to write to
   */
  constructor (story) {
    if (!(story instanceof Story)) {
      throw new Error('Not a Story object!');
    }

    this.output = null;

    this.writeFile(story);
  }

  /**
   * Write to a file using a Story object
   *
   * @param {Story} story - Story format to write
   * @returns {void}
   */
  writeFile (story) {
    // Write StoryTitle first
    let outputContents = ':: StoryTitle\n' + story.name + '\n\n';

    // Write the StoryData second
    outputContents += ':: StoryData\n';

    // Test if story.metadata is an object or not
    if (typeof story.metadata === 'object') {
      // Write any metadata in pretty format
      outputContents += ' ' + JSON.stringify(story.metadata, undefined, 2);
    } else {
      // If, for whatever reason, story.metadata is not an object, throw error.
      throw new Error('Story Metadata MUST be an object!');
    }

    // Add two newlines
    outputContents += '\n\n';

    // Are there any passages?
    if (story.passages.length > 0) {
      // Build the contents
      for (const passage in story.passages) {
        // Write the name
        outputContents += ':: ' + story.passages[passage].name;

        // Test if it has any tags
        if (story.passages[passage].tags.length > 0) {
          outputContents += ' [';

          for (const tag of story.passages[passage].tags) {
            outputContents += ' ' + tag;
          }

          outputContents += ']';
        }

        // Write out any passage metadata
        outputContents += JSON.stringify(story.passages[passage].metadata);

        // Add the text and two newlines
        outputContents += '\n' + story.passages[passage].text + '\n\n';
      }
    } else {
      // Create empty Start passage
      outputContents += ':: Start\n';
    }

    this.output = outputContents;
  }
}

module.exports = TweeWriter;
