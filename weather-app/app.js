
const request = require('request')
const chalk = require('chalk')

const url = 'https://api.darksky.net/forecast/41f57b0025108c3d1b7d34edcaa7db60/37.8267,-122.4233?units=si'
request({url : url , json: true} , (error , response)=>{
    if(error){
       console.log(`${chalk.red('Unable to connect to Dark Sky API.')}`) 
    }
    else{
        const currently = response.body.currently
        const daily = response.body.daily
        console.log(`Today's temperature is ${currently.temperature} degree Celcius and chance to rain is ${currently.precipProbability}% .`)
        console.log(`${chalk.yellow.inverse('Conclusion')} : ${chalk.red(daily.data[0].summary)}`)
    }
})

// GeoCoding
const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic3VtYW5iaGF0dGFyYWkiLCJhIjoiY2p6d25xN3ozMGFxMDNjcGFrM3l4YThjcyJ9.7x5EkAOcW3wCzfbqmVfinA&limit=1' ;
request({url : geoUrl , json:true} , (error , response)=>{
    if(error){
       console.log(`${chalk.red('Unable to connect to Map Box API.')}`) 
    }
    else {
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(`Latitude is ${latitude}`)
        console.log(`Longitude is ${longitude}`)
    }
})
