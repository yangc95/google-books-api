const inquirer = require('inquirer');

const mainMenu = () => {
  const menu = [
    {
      type: 'list',
      name: 'option',
      message: 'Pick from the options below:',
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
      message: 'Search for a book by entering a keyword(s), i.e. "emma":',
      validate: (value) => {
        if (value.length) {
          return true;
        } else {
          return 'Please enter a keyword.';  
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
        choices: books
        // Previous validate key with callback was removed
        // so user can proceed without choosing a book
      }
  ];
  return inquirer.prompt(questions)
};

module.exports = {
  mainMenu,
  bookSearch,
  bookChoice
};