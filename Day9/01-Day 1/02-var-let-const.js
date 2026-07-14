
// var stored in global window object

// var globalVar = "Iam global var"
// console.log(globalVar);  //Iam global var
// console.log(window.globalVar);  //Iam global var


// let globalLet = "Iam global let"
// console.log(globalLet);  //Iam global let
// console.log(window.globalLet);  //undefined


// const globalConst = "Iam global const"
// console.log(globalConst);  //Iam global const
// console.log(window.globalConst);  //undefined


// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// function scope (all [var - let - const])

// function sayHello() {
//     var x = 10;
//     let y = 20;
//     const z = 30;
// }

// sayHello();

// console.log(x); // x is not defined
// console.log(y) //y is not defined
// console.log(z); //z is not defined

// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// Block Scope

// var => global scope not block
// let , const => are block scopes

// if (true) {
//     var x = 10;
//     let y = 20;
//     const z = 30;
// }


// console.log(x); // 10
// console.log(y) //y is not defined
// console.log(z); //z is not defined

// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz


// var  can be redeclared & reassigned
// var x = 10;
// var x = "hello";
// console.log(x)


// // let can not be redeclared , can be reassigned
// let y = 10;
// // let y = 10; //Identifier 'y' has already been declared
// y = "hello"
// console.log(y);


// // const cannot redeclare  or reassign
// const z = 10;
// // const z = 10; //Identifier 'z' has already been declared
// // z= 15 /Assignment to constant variable
// console.log(z)