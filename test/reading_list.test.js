const assert = require('assert');
const { addToReadingList } = require('../src/reading_list');

describe('addToReadingList', function() {
  let readingList = [];
  addToReadingList(readingList, 'Emma | Jane Austen | Simon & Schuster');

  it('should add the correct title of the book to the reading list', function() {
    assert.equal(readingList[0].title, 'Emma')
  });
  
  it('should add the correctauthor of the book to the reading list', function() {
    assert.equal(readingList[0].author, 'Jane Austen')
  });

  it('should add the correct publisher of the book to the reading list', function() {
    assert.equal(readingList[0].publisher, 'Simon & Schuster')
  });
});