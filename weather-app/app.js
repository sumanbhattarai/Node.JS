
const request = require('request') // to handle http request
const chalk = require('chalk') // to ouput with color in terminal
const geoCode = require('./utils/geoCode.js')

//declaring a url variable to store the url of dark sky api
const url =  'https://api.darksky.net/forecast/41f57b0025108c3d1b7d34edcaa7db60/37.8267,-122.4233?units=si' 

//request contains two argument . First is an options object which outlines what we want to do . 
// It is where we specify our url.
// Second one is function.

request({url : url , json : true} , (error , response)=>{
    if(error)
    {
        console.log(`${chalk.red('Unable to connect to dark sky API.')}`)
    }
    else if (response.body.error)
    {
        console.log(`${chalk.red('Unable to find location.')}`)
    }
    else
    {
        // console.log(`${chalk.green('Connected Successfully')}`)
        console.log(`Currently, it is ${chalk.yellow(response.body.currently.temperature)} degree celcius. There is ${chalk.yellow(response.body.currently.humidity)} % chances of raining.`)
    }
})

// geocoding.
// const urlGeo = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic3VtYW5iaGF0dGFyYWkiLCJhIjoiY2sxc3plbHpqMDA5dTNjcXM0ZnNldmV6biJ9.h3Oq798TEzuOq1t06fXM9A&limit=1'
// request({url : urlGeo , json: true} , (error , response)=>{
//     if(error)
//     {
//         console.log(`${chalk.red('Unable to connect to Map box API')}`)
//     }
//     else if (response.body.features.length === 0)
//     {
//         console.log(`${chalk.red('Unable to find the location.')}`)
//     }
//     else
//     {
//         console.log(`Los angeles co-ordinate is ${chalk.yellow(response.body.features[0].center[0])}, ${chalk.yellow(response.body.features[0].center[1])}`)
//     }

// })



geoCode('Bharatpur Nepal' , (error , data)=>{
    console.log('Error : ' ,  error )
    console.log('Data : ' ,  data)
})
