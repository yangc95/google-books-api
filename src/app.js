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
          .then(booksObject => {
            const booksArray = booksObject.book;
            const length = booksArray.length;

            if (length === 1) {
              addToReadingList(readingList, booksArray[0]);
              clear();
            } else if (length > 1) {
              booksArray.forEach(book => {
                addToReadingList(readingList, book)
              });
              clear();
            } else {
              clear();
              console.log('You did not add anything to your Reading List!\n Let\'s start again.\n');
            }
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