
const chalk = require('chalk') // to ouput with color in terminal
const geoCode = require('./utils/geoCode.js')
const getWeather = require('./utils/getWeather.js')


// Fetching weather forecast
getWeather (37.8267  , -122.4233 , (error , data)=>{
    console.log('Error : ' , error )
    console.log('Data : ' , data)
})


// GeoCoding
geoCode('Bharatpur Nepal' , (error , data)=>{
    console.log('Error : ' ,  error )
    console.log('Data : ' ,  data)
})
