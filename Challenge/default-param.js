
const greet = ( name = 'User' )=>{
    console.log('Hello ' + name )
}

greet('Suman') // Hello Suman
greet(); // Hello User

//if the argument value is not provided while invoking the func , it takes the default value as shown above.