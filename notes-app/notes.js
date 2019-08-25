
// console.log('Util.js');

// const name = "Suman Bhattarai" ;

// const add = function (a , b)
// {
//     return a + b ;
// }

// module.exports = add ;

const fs = require('fs')
const getNotes = function ()
{
    return 'this notes .... '
}

const addNote = function (title , body){
    const note = loadNote()
    const duplicate = note.filter(function(note){
        return note.title === title
    })
    if(duplicate.length === 0){
        console.log('Note is added.')
        note.push({
            title: title,
            body:body
        })
        
    } else {
        console.log('Title has already been taken.')
    }


    saveNote(note);

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
    addNote : addNote
}