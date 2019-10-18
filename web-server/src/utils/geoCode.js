
const request = require('request')

const geoCode = ( address , callback )=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoic3VtYW5iaGF0dGFyYWkiLCJhIjoiY2sxc3plbHpqMDA5dTNjcXM0ZnNldmV6biJ9.h3Oq798TEzuOq1t06fXM9A&limit=1'
    request( {url, json : true} , (error , {body})=>{
        if(error)
        {
            callback('Unable to connect to Map box API' , undefined)

        }
        else if (body.features.length === 0)
        {
            callback('Unable to find the location.' , undefined)
        }
        else
        {
            callback(undefined , {
                longitude : body.features[0].center[0] ,
                latitude : body.features[0].center[1] ,
                place : body.features[0].place_name
            })
        }

    } )
    
}

module.exports = geoCode