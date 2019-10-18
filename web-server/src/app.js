
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
        name : 'Homepage'
    })

})

app.get('/about' , (req , res)=>{
    res.render('about' , {
        name : 'About Section' ,
        creatorName : 'Suman Bhattarai'
    })
})

app.get('/weather' , (req , res)=>{
    res.render('weather' , {
        name : 'Weather Forecast'

    })
})

app.get('/help' , (req , res)=>{
    res.render('help' , {
        name : 'Help Section'
    })

})

app.get('/about/*' , (req , res)=>{
    res.render('404' , {
        section : 'About Section'
    })
})

app.get('/weather/*' , (req , res)=>{
    res.render('404' , {
        section : 'Weather Section'
    })
})

app.get('/help/*' , (req , res)=>{
    res.render('404' , {
        section : 'Help Section'
    })
})

app.get('*' , (req , res)=>{
    res.render('404' , {
        section : "Weather App"
    })
})


app.listen(3000 , ()=>{
    console.log('Server is running at port 3000.')
})