
const chalk = require('chalk') // to ouput with color in terminal
const geoCode = require('./utils/geoCode.js')
const getWeather = require('./utils/getWeather.js')



// GeoCoding
geoCode('Bharatpur Nepal' , (error , data)=>{
    if(error)
    {
        return console.log(chalk.red(error))
    }
    console.log(`Location : ${chalk.yellow(data.place)}`)
    // Fetching weather forecast
    getWeather (data.latitude  , data.longitude , (error , data)=>{
        if(error)
        {
            return console.log(chalk.red(error))
        }

        console.log(`It is ${chalk.yellow(data.temperature)} degree Celcuis. There is ${chalk.yellow(data.humidity)} % chance of raining.`)
        

    })
})
