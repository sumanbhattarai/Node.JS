
const chalk = require('chalk') // to ouput with color in terminal
const geoCode = require('./utils/geoCode.js')
const getWeather = require('./utils/getWeather.js')

const address = process.argv[2]
if(!address)
{
    return console.log(chalk.red('Please provide an address'))
}

// GeoCoding
geoCode(address , (error , {longitude , latitude , place})=>{
    if(error)
    {
        return console.log(chalk.red(error))
    }
    console.log(`Location : ${chalk.yellow(place)}`)
    // Fetching weather forecast
    getWeather (latitude  ,longitude , (error , {temperature , humidity})=>{
        if(error)
        {
            return console.log(chalk.red(error))
        }

        console.log(`It is ${chalk.yellow(temperature)} degree Celcuis. There is ${chalk.yellow(humidity)} chance of raining.`)
        

    })
})
