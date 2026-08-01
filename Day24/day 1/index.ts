// let age: string;

// age = "20";

// console.log(age.); // string

/**
 * staring
 * number
 * boolean
 * array
 * any //not used in typescript
 * unknown
 * union
 * literal type
 * Date
 * tuple
 */

// let age: number[]
// let x :Array<number>

// let y = [1,2,3]

// let g: unknown = 10;

// let a: number | string;

// a = 10;
// a = "10";

// let bookingStatus: "pending" | "completed";

// bookingStatus = "pending";

// // bookingStatus = "mo";
// console.log(typeof bookingStatus);

// let c: [
//   number,
//   string,
//   boolean,
//   string,
//   [number, string],
//   { name: string; age: number },
// ] = [10, "10", false, "mo", [10, "mohmeed"], { name: "mohmed", age: 25 }];

// function printAge(age: number): void {
//   console.log(age);
// }

// function calcAge(birthday: Date): number {
//     let age = new Date().getFullYear() - birthday.getFullYear();
//     return age;
// }

// const sum = (a:number, b:number):number => a+b;

// function greet (name?: string) {
//     if (name) {
//         console.log(`Hello, ${name}!`);
//     } else {
//         console.log("Hello, stranger!");
//     }
// }

// greet("Mo");
// greet();

// interface               //type

// interface User {
//     name: string;
//     age: number;
//     phone: string;
// }

// let user: User ={
//     name: "mo",
//     age: 20,
// }

// class User implements User {
//     name: string;
//     age: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     eat (): void {
//         console.log("eating");
//     }
// }

// type User = {
//     name: string;
//     age: number;
//     phone: string;
// }

// let user: User ={
//     name: "mo",
//     age: 20,
// }

// type Id = number | string;

// let id: Id = true;

// type Status = "pending" | "completed";

// let bookingStatus: Status = "pending";

// type Point = [number,number]

// const p:Point =[5,10]
// type Sum = (a: number, b: number) => number;

// const sum: Sum = (a, b) => a + b;

// interface Animal {
//     name: string;
// }

// interface Dog extends Animal {
//     bark(): void;
//     age: number;
// }

// const dog: Dog ={
//     name: "dog",
//     age: 10,
//     bark() {
//         console.log("bark");
//     }
// }

// type Animal = {
//   name: string;
// };
// type Dog = Animal & {
//   bark(): void;
//   age: number;
// };
// const dog: Dog = {
//   name: "dog",
//   age: 10,
//   bark() {
//     console.log("bark");
//   },
// };

// enum Role {
//   Admin = "admin",
//   User = "user",
// }
// const role: Role = Role.Admin;

// console.log(role);

// generics

// function printText<T>(text: T): T {
//   return text ;
// }

// printText<number>(10);

// const x = 10;
