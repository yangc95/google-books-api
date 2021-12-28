const printReadingList = (readingList) => {
  console.log(readingList);
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