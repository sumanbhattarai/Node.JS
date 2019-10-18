
console.log('Client side JS')


const formData = document.querySelector('form')
formData.addEventListener('submit'  , (e)=>{
    e.preventDefault()
    let address = document.querySelector('#address').value
    document.querySelector('.loader').style.display = 'block'
    fetch('http://localhost:3000/weather?address='+address).then((response)=>{

    response.json().then((data)=>{
        document.querySelector('.loader').style.display = 'none'
        if(data.error)
        {
            document.querySelector('#output-0').innerHTML = data.error
            document.querySelector('#output-1').innerHTML = ''
            document.querySelector('#output-2').innerHTML = ''
            document.querySelector('#output-3').innerHTML =  ''
        }
        else
        {
            document.querySelector('#output-0').innerHTML = ''
            document.querySelector('#output-1').innerHTML = "Temperature : " + data.temperature + " degree Celcius."
            document.querySelector('#output-2').innerHTML = "Probability of Raining : " + data.humidity
            document.querySelector('#output-3').innerHTML =  "Location : " + data.place

        }
    })
})
})

 