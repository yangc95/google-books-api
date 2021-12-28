const inquirer = require('inquirer');

const mainMenu = () => {
  const menu = [
    {
      type: 'list',
      name: 'action',
      message: 'Pick one of the actions:',
      choices: [
        { 
          name: 'Search for a book',
          value: 'search'
        },
        {
          name: 'View my reading list',
          value: 'list'
        },
        {
          name: 'Exit',
          value: 'exit'
        }
      ]
    }
  ];
  return inquirer.prompt(menu);
};

const bookSearch = () => {
  const query = [
    {
      type: 'input',
      name: 'search',
      message: 'Search for a book',
      validate: (value) => {
        if (value.length) {
          return true;
        } else {
          return 'Please enter a book name.';  
        }
      }
    }
  ];
  return inquirer.prompt(query);
};

const bookChoice = (books) => {
  const questions = [
      {
        type: 'checkbox',
        name: 'book',
        message: 'Pick the book you wish to add to your Reading List',
        choices: books,
        default: books[0],
        validate: (value) => {
          if (value.length) {
            return true;
          } else {
            return 'Pick a book'
          }
        }
      }
  ];
  return inquirer.prompt(questions)
};

module.exports = {
  mainMenu,
  bookSearch,
  bookChoice
};