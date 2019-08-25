const chalk = require('chalk')
const yargs = require('yargs')
const notes  = require('./notes.js')
console.log(notes.getNotes())

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
        // console.log('Title : ' + argv.title)
        // console.log('Body : ' + argv.body)
        notes.addNote(argv.title , argv.body)
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