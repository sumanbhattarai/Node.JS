
const fs = require('fs')
const chalk = require('chalk')
const getNotes = function (){
    return 'this notes .... '
}

const addNote = function (title , body){
    const note = loadNote()
    const duplicate = note.filter(function(note){
        return note.title === title
    })
    if(duplicate.length === 0){
        console.log(chalk.green('Note is added.'))
        note.push({
            title: title,
            body:body
        })
        
    } else {
        console.log(chalk.red('Title has already been taken.'))
    }


    saveNote(note);

}

const removeNote = function(title){
    const note = loadNote()
    const updatedNote = note.filter(function(note){
        return note.title !== title
    })
    if(updatedNote.length < note.length)
    {
        saveNote(updatedNote)
        console.log(chalk.green('Successfully removed.'))
    }else{
        console.log(chalk.red('It does not exist.'))
    }


}

const saveNote = function(note){
    const dataJSON = JSON.stringify(note)
    fs.writeFileSync('note.json' , dataJSON)
}

const loadNote = function(){
    try{
        const dataBuffer = fs.readFileSync('note.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e)
    {
        return[]
    }
    
}

module.exports =  { 
    getNotes : getNotes ,
    addNote : addNote ,
    removeNote : removeNote
}