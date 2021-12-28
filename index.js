const clear = require('clear');
const figlet = require('figlet');
const { main } = require('./src/app');

clear();

// Print out title screen
console.log(
  figlet.textSync('Google Books API', {
    font: 'Standard',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    whitespaceBreak: true
  })
);

main();