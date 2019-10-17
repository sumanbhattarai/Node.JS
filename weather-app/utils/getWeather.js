
const request = require('request')

//request contains two argument . First is an options object which outlines what we want to do . 
// It is where we specify our url.
// Second one is function.
const getWeather = ( long , lat , callback)=> {

    //declaring a url variable to store the url of dark sky api
    const url = 'https://api.darksky.net/forecast/41f57b0025108c3d1b7d34edcaa7db60/'+long+','+lat+'?units=si' 
    request({url : url , json:true } , (error , response)=>{
        if(error)
        {
            callback('Unable to connect to dark sky API.' , undefined)
        }
        else if(response.body.error)
        {
            callback('Unable to find the location.' , undefined)

        }
        else
        {
            callback(undefined , {
                temperature : response.body.currently.temperature ,
                humidity : response.body.currently.humidity
            })
        }

    })

}

module.exports = getWeather