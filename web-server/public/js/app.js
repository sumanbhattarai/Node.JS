
console.log('Client side JS')
fetch('http://localhost:3000/weather?address=chitwan').then((response)=>{
    response.json().then((data)=>{
        if(data.error)
        {
            console.log('Something went wrong')
        }
        else
        {
            console.log(data)
        }
    })
})

 