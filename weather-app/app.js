
const request = require('request')

const url = 'https://api.darksky.net/forecast/41f57b0025108c3d1b7d34edcaa7db60/37.8267,-122.4233'
request({url : url , json: true} , (error , response)=>{
    const currently = response.body.currently
    console.log(`Today's temperature is ${currently.temperature} and chance to rain is ${currently.precipProbability}`)
})
