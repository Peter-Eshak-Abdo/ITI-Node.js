// const name = "ali";
// const age = 26;

// const message = `hello ${name} and age                 
//                                         is ${age}`


// console.log(message)

function sayHello(name = "guest"){
    console.log(`hello ${name}`)
}

sayHello("ali");
sayHello("ahmed");
sayHello();