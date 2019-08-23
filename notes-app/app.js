
//The fs module provides an API for interacting with the file system.
//To use this module:

// const fs = require('fs');
// const sum = require('./utils.js');

// // to create a new file
// fs.writeFileSync('file.txt' , 'Hello World ! ') ;

// // to append the existing file
// // fs.appendFileSync('file.txt' , 'Hello World ! ') ;

// console.log(sum(2,3));


const getNotes  = require('./utils.js')

console.log(getNotes())