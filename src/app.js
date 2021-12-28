const clear = require('clear');
const { mainMenu, bookSearch, bookChoice } = require('./input');
const { printReadingList, addToReadingList } = require('./reading_list');
const { fetchBooks } = require('./api/books');
const readingList = require('../reading_list.json');

const main = async () => {
  let inUse = true;

  while (inUse) {
    const directory = await mainMenu();
    const { action } = directory;
    clear();

    switch (action) {  
      case 'search':
        const search = await bookSearch();
        const books = await fetchBooks(search);

        await bookChoice(books)
          .then(bookObj => {
            const book = bookObj.book[0]
            addToReadingList(readingList, book);
          })
          .catch(error => {
            console.log(error)
          });

        break;
      case 'list':
        printReadingList(readingList);
        break;
      case 'exit':
        console.log('Bye!')
        inUse = false;
        break;
      default:
        break;
    };
  };
};

module.exports = {
    main
};