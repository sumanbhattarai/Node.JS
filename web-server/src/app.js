
const express = require('express')
const path = require('path')

const app = express()

const pathDirectory = path.join(__dirname , '../public')

//setup handlebars engine and views location
app.set('view engine' , 'hbs')
app.set('views' , path.join(__dirname , '../views'))

// setup static directory to serve
app.use(express.static(pathDirectory))

app.get('' , (req , res)=>{
    res.render('index')

})


app.listen(3000 , ()=>{
    console.log('Server is running at port 3000.')
})