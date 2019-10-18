
const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()

// Defining path
const pathDirectory = path.join(__dirname , '../public')
const viewsPath = path.join(__dirname , '../templates/views')
const partialsPath = path.join(__dirname , '../templates/partial')

//setup handlebars engine and views location
app.set('view engine' , 'hbs')
app.set('views' , viewsPath)
hbs.registerPartials(partialsPath)


// setup static directory to serve
app.use(express.static(pathDirectory))

app.get('' , (req , res)=>{
    res.render('index' ,{
        name : 'Weather Application'
    })

})


app.listen(3000 , ()=>{
    console.log('Server is running at port 3000.')
})