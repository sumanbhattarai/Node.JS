
const request = require('request')
const chalk = require('chalk')

const url = 'https://api.darksky.net/forecast/41f57b0025108c3d1b7d34edcaa7db60/37.8267,-122.4233?units=si'
request({url : url , json: true} , (error , response)=>{
    const currently = response.body.currently
    const daily = response.body.daily
    console.log(`Today's temperature is ${currently.temperature} degree Celcius and chance to rain is ${currently.precipProbability}% .`)
    console.log(`${chalk.yellow.inverse('Conclusion')} : ${chalk.red(daily.data[0].summary)}`)
})
