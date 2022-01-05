const printReadingList = (readingList) => {
  console.log('Reading List\n============');

  if (!readingList.length) {
    console.log('No books added ... yet!')
  } else {
    readingList.map(book => {
      console.log(`${book.title} | ${book.author} | ${book.publisher}`)
    });
  }


  console.log('\n');
};

const addToReadingList = (readingList, book) => {
  const bookInfo = book.split(' | ');
  const title = bookInfo[0];
  const author = bookInfo[1];
  const publisher = bookInfo[2];

  readingList.push({
    title,
    author,
    publisher
  })  
};

module.exports = {
  printReadingList,
  addToReadingList
};