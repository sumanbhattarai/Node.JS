
// define an add func that accepts the correct argument.
// use set timeout to simulate a 2sec delay.
// after 2sec are up , call the callback func with the sum.
// test your work.

const add = ( a, b , sumfunc ) => {
    setTimeout(()=>{
        const sum = a + b 
        sumfunc(sum)
    } , 2000)
}

add(1 , 4 , (sum)=>{
    console.log('Sum is ' + sum )
})