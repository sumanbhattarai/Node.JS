
const fs = require('fs')
const chalk = require('chalk')
const getNotes = ()=> 'this notes .... '


const addNote = (title , body) => {
    const note = loadNote()
    const duplicate = note.find((note) =>note.title === title )
    if(!duplicate){
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

const removeNote =(title) => {
    const note = loadNote()
    const updatedNote = note.filter((note) => note.title !== title)
    if(updatedNote.length < note.length)
    {
        saveNote(updatedNote)
        console.log(chalk.green('Successfully removed.'))
    }else{
        console.log(chalk.red('It does not exist.'))
    }


}

const listingNotes = ()=> {
    console.log(chalk.blue('Your Notes ...'))
    const note = loadNote()
    note.forEach((note) => {
        console.log(note.title)
    });
}

const readNote = (title)=> {
    console.log("You are reading " + chalk.blue(title))
}

const saveNote = (note) => {
    const dataJSON = JSON.stringify(note)
    fs.writeFileSync('note.json' , dataJSON)
}

const loadNote = ()=> {
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
    removeNote : removeNote,
    listingNotes : listingNotes,
    readNote : readNote
}