//destructing

// with Objects
// const {data destructed} = {object(initializer)}

// const obj1 = { ID: 1, Name: "ali", Intake: 46 };
// // let {ID, Name , Intake } = obj1;
// let {ID:myID, Name:myName , Intake:myIntake} = obj1;

// console.log(myID,myName,myIntake);


// const {...hamada} = { ID: 1, Name: "ali", Intake: 46 };
// console.log(hamada)

// const obj2 = { Name: "ali", Address: { country: "EGYPT", city: "Cairo" } };
// const { Address:{ city : myCity , country : myCountry } } = obj2
// console.log(myCountry ,myCity);

// const myObj = { a: 1, b: 2 };
// // Object.freeze(myObj);
// // Object.seal(myObj);
// myObj.a = 3;
// myObj.b = 4;
// myObj.c = 5;

// console.log(myObj)


// ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ
// ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ
// ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ

// with arrays

// const myArr = [1, 2, 3];
// // const [data destructed] = [array]


// const [a,,c] = myArr;
// console.log(a,c);

// const[...operator] = myArr;
// console.log(operator)

// let x = 10;;
// let y = 20;

// [x, y] = [y, x]
// console.log(x, y)

// ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ
// ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ
// ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ

// with function

// function printUser({ name, age }) {
//     console.log(`hello , my name is: ${name} - age: ${age}`)
// }

// user1 = { name: "ali", age: 25 , id:2 };
// user2 = { age: 23, name: "ahmed" };

// printUser(user1)
// printUser(user2)




// function printUser([name, age]) {
//     console.log(`hello , my name is: ${name} - age: ${age}`)
// }

// user1 = ["ali", 25];
// user2 = [23, "ahmed"];

// printUser(user1)
// printUser(user2)