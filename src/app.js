const clear = require('clear');
const { mainMenu, bookSearch, bookChoice } = require('./input');
const { printReadingList, addToReadingList } = require('./reading_list');
const { fetchBooks } = require('./api/books');

const main = async () => {
  let inUse = true;
  let readingList = [];

  while (inUse) {
    const directory = await mainMenu();
    const { option } = directory;
    clear();

    switch (option) {  
      case 'search':
        const search = await bookSearch();
        const books = await fetchBooks(search);

        await bookChoice(books)
          .then(bookObj => {
            const book = bookObj.book[0]
            if (book) {
              addToReadingList(readingList, book);
            } else {
              clear();
              console.log('You did not add anything to your Reading List!\n Let\'s start again.\n');
            }
          })
          .catch(error => {
            console.log(error)
          });

        clear();
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