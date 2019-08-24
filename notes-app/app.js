
//The fs module provides an API for interacting with the file system.
//To use this module:

// const fs = require('fs');
// const sum = require('./utils.js');

// // to create a new file
// fs.writeFileSync('file.txt' , 'Hello World ! ') ;

// // to append the existing file
// // fs.appendFileSync('file.txt' , 'Hello World ! ') ;

// console.log(sum(2,3));


// const getNotes  = require('./utils.js')

// console.log(getNotes())


// const validator = require('validator')

// console.log(validator.isEmail('sumanbhattaraiofficial@gmail.com'))
// console.log(validator.isURL('https://sbofficial.me'))

const chalk = require('chalk')

console.log(chalk.green('Success !'))
console.log(chalk.bgGreen.white('Success !'))
console.log(chalk.red('My name') + ' is ' + chalk.bgGreen.red('Suman Bhattarai'))