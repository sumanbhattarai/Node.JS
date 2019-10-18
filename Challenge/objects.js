
// object shorthand

const name = 'Suman'

// If we want to use the property with value from a variable having property name and variable name same
// then we can use shorthand.
const person = {
    name , // it is same as writing name : name . 
    age : 20
}

console.log(person.name)
console.log(person.age)


// Object Destructing

const info = {
    infoName : 'X' ,
    infoAge : 30 
}

// rating will have value 5 if it doent have any value defined in info object.
const {infoName , infoAge , rating = 5} = info
console.log(infoName) // X
console.log(infoAge) // 30
console.log(rating) //undefined

// if we want a new name then

const { infoName: newName } = info
console.log(newName)


// Destructuring objects in argumnets

const demo = ( name , {infoAge: userAge})=> {
    console.log(name)
    console.log(userAge)

}

demo('Suman' , info) //info is an object