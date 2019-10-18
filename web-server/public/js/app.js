
console.log('Client side JS')


const formData = document.querySelector('form')
formData.addEventListener('submit'  , (e)=>{
    e.preventDefault()
    let address = document.querySelector('#address').value

    fetch('http://localhost:3000/weather?address='+address).then((response)=>{
    response.json().then((data)=>{
        if(data.error)
        {
            console.log(data.error)
        }
        else
        {
            console.log(data)
        }
    })
})
})

 