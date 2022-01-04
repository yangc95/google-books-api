# Google Books CLI API App

A command line application built using Node.js and [npm](https://www.npmjs.com/) (node package manager).

## How to use

`git clone` this repository and run `npm install` to download the node package manager dependencies.

`node index.js` will run this app. Follow the prompt to query for a book by entering its name.

## Dependencies

- [axios](https://www.npmjs.com/package/axios): HTTP client that returns a `Promise` object
- [clear](https://www.npmjs.com/package/clear): Clears CLI
- [dotenv](https://www.npmjs.com/package/dotenv): Loads privacy-sensitive variables from a `.env` file in the project enviornment
- [figlet](https://www.npmjs.com/package/figlet): ASCII art in CLI from text
- [inquirer](https://www.npmjs.com/package/inquirer): For an interactive CLI UI

## MVP (minimum viable product)

- This application connects to the Google Books API (application programming interface) to display a list of 5 books.
- Books, or volumes, should be displayed to include the author, title, and publishing company.
- Upon query, users can select 1 of the 5 volumes displayed.
- Finally, a user can view their reading list.
