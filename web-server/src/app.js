
const express = require('express')

const app = express()

app.get('' , (req , res)=>{
    res.send('Homepage')
})

app.get('/about' , (req, res)=>{
    res.send('About')
})

app.get('/skill' , (req, res)=>{
    res.send('Skill')
})

app.get('/contact' , (req, res)=>{
    res.send('Contact')
})

app.listen(3000 , ()=>{
    console.log('Server is running at port 3000.')
})