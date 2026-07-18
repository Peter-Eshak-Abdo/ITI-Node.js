// class ==> blueprint

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log(`Hello ${this.name} - age: ${this.age}`)
//     }

// }

// const person1 = new Person("ali", 25)
// const person2 = new Person("ahmed", 23)

// console.log(person1.name, person1.age)
// person1.greet();
// console.log(person2.name, person2.age)
// person2.greet();



// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// Inheritance

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log(`Hello ${this.name} - age: ${this.age}`)
//     }
// }


// class Worker extends Person {
//     constructor(name, age, job) {
//         super(name, age) //super call parent constructor
//         this.job = job
//     }

//     // overriding
//     greet() {
//         // super.greet() // console.log(`Hello ${this.name} - age: ${this.age}`)
//         console.log(`Hello ${this.name} - age: ${this.age} - job: ${this.job}`)
//     }

// }

// const worker1 = new Worker("ali", 25, "software developer");
// worker1.greet()

// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// class Person{
//     publicField = "public"
//     #privateField = "private"

//     returnPrivate(){
//         console.log(this.#privateField)
//     }
// }

// const person1 = new Person();
// console.log(person1.publicField);
// // console.log(person1.#privateField);


// person1.publicField = "new public"
// console.log(person1.publicField);

// person1.returnPrivate()

// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz


// static member => access direct from parent class

// class StaticClass {
//     static gender = "male";
// }

// const static1 = new StaticClass();
// console.log(static1.gender) //undefined

// console.log(StaticClass.gender)


// console.log(Math.pow(5, 2));

// class MathUtils {
//     static pow(x, y) {
//         return x * y;
//     }
//     static diff(x, y) {
//         return x - y;
//     }
// }

// console.log(MathUtils.pow(5, 2))
// console.log(MathUtils.diff(5, 2))


// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// Abstract Class

class Abstract {
    constructor() {
        if (new.target.name === "Abstract") {
            throw new Error("it's abstract class")
        }
    }

    print() { } //implementation inside derived class
}



// const abstract1 = new Abstract()

class Inherited extends Abstract {

    print() {
        console.log("hello") //must implement inherited function
    }
}

const inherited1 = new Inherited();
inherited1.print()

// ---------------------------------------------------------------------------
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
