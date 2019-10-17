
const request = require('request')

const geoCode = ( address , callback )=>{
    const urlGeo = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoic3VtYW5iaGF0dGFyYWkiLCJhIjoiY2sxc3plbHpqMDA5dTNjcXM0ZnNldmV6biJ9.h3Oq798TEzuOq1t06fXM9A&limit=1'
    request( {url : urlGeo , json : true} , (error , response)=>{
        if(error)
        {
            callback('Unable to connect to Map box API' , undefined)

        }
        else if (response.body.features.length === 0)
        {
            callback('Unable to find the location.' , undefined)
        }
        else
        {
            callback(undefined , {
                latitude : response.body.features[0].center[0] ,
                logitutde : response.body.features[0].center[1] ,
                place : response.body.features[0].place_name
            })
        }

    } )
    
}

module.exports = geoCode