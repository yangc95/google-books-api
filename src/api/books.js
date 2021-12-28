const axios = require('axios').default;
require('dotenv').config();

const fetchBooks = async (search) => {
  const apiKey = process.env.API_KEY_GOOGLE_BOOKS;
    
  try {
    const books = await axios.get(`https://www.googleapis.com/books/v1/volumes`, {
      params: {
        q: search,
        key: apiKey,
        startIndex: 0,
        maxResults: 5,
        orderBy: 'relevance',
      }
    });

    const booksResponse = books.data.items.map(book => {
      const bookInfo = book.volumeInfo;
      return `${bookInfo.title} | ${bookInfo.authors} | ${bookInfo.publisher}`
    });
    return booksResponse;
  } catch (error) {
    console.log(error)
  }
};

module.exports = {
  fetchBooks,
};