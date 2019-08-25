
//The fs module provides an API for interacting with the file system.
//To use this module:

// const fs = require('fs');
// const sum = require('./utils.js');

// // to create a new file
// fs.writeFileSync('file.txt' , 'Hello World ! ') ;

// // to append the existing file
// // fs.appendFileSync('file.txt' , 'Hello World ! ') ;

// console.log(sum(2,3));


const getNotes  = require('./notes.js')

console.log(getNotes())


// const validator = require('validator')

// console.log(validator.isEmail('sumanbhattaraiofficial@gmail.com'))
// console.log(validator.isURL('https://sbofficial.me'))

const chalk = require('chalk')

// console.log(chalk.green('Success !'))
// console.log(chalk.bgGreen.white('Success !'))
// console.log(chalk.red('My name') + ' is ' + chalk.bgGreen.red('Suman Bhattarai'))
// console.log(chalk.green.bold('Done'))
// console.log(chalk.bold('Okay'))

//console.log(process.argv) 
// argv[0] is for the path to the nodeJs executable on your machine
// argv[1] is for the path to our app.js
 
// const command  = process.argv[2]
// if(command == 'add')
// {
//     console.log('Adding note')
// }
// else if (command == 'read')
// {
//     console.log('Reading a note ')
// }
// else if (command =='delete')
// {
//     console.log('Deleting a note')
// }
// else
// {
//     console.log('Command not found')
// }

const yargs = require('yargs')

//Creating add command

yargs.command({
    command : 'add',
    description : 'Add a new note',
    builder : {
        title : {
            describe : 'Title of the note',
            demandOption : true , 
            type : 'string'
        },

        body : {
            describe : 'Text to add',
            demandOption : true ,
            type: 'string'

        }
    },
    handler : function(argv){
        console.log('Title : ' + argv.title)
        console.log('Body : ' + argv.body)
    }
})

//creatind remove command
yargs.command({
    command : 'remove' ,
    description : 'Remove a note' ,
    handler : function(){
        console.log('Removing a note .....')
    }
})

//Creating list command
yargs.command({
    command : 'list' ,
    description : 'List a note' ,
    handler : function(){
        console.log('Listing a note .....')
    }
})

//Creating read command 
yargs.command({
    command : 'read' ,
    description : 'Read a note' ,
    handler : function(){
        console.log("Reading a note .....")
    }
})

yargs.parse()