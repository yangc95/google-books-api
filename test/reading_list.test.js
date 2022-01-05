const assert = require('assert');
const { addToReadingList } = require('../src/reading_list');

describe('addToReadingList', () => {  
  describe('should add one book to the reading list', () => {
    let readingList = [];

    it('zero books in the reading list', () => {
      assert.equal(readingList.length, 0)
    });
    
    it('one book is added to the reading list', () => {
      addToReadingList(readingList, 'Emma | Jane Austen | Simon & Schuster');
      assert.equal(readingList.length, 1)
    });
  });

  describe('should have the correct book information' , () => {
    let readingList = [];
    addToReadingList(readingList, 'Emma | Jane Austen | Simon & Schuster');

    it('title is accurate', () => {
      assert.equal(readingList[0].title, 'Emma')
    });
    
    it('author is accurate', () => {
      assert.equal(readingList[0].author, 'Jane Austen')
    });
  
    it('publisher is accurate', () => {
      assert.equal(readingList[0].publisher, 'Simon & Schuster')
    });
  });
});