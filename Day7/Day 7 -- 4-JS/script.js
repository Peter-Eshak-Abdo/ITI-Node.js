// Date Object

// current date
// var currentDate = new Date();
// console.log(currentDate);

// specific date

// 01-numbers (year,month,day)
// MONTH is zero-indexed   (January = 0   , December = 11)
// [0,1,2,3,4,5,6,7,8,9,10,11]
// var myNumbersDate = new Date(2024, 5, 2); //jun
// console.log(myNumbersDate);

// 02-string format ("month/day/year");
// var myStringDate = new Date("6/2/2024");
// console.log(myStringDate)


// days are zero-indexed
// days = [sunday , monday , tuesday , wednesday , thursday , friday , saturday]
// days = [   0   ,   1    ,    2    ,    3      ,     4    ,    5   ,     6   ]

// months are zero-indexed
// months = [0 , 1 , 2 , 3 ,4 , 5 , 6 , 7 , 8 , 9 , 10 , 11]

// Date Methods
// console.log(myStringDate.getDay()) //0 => sunday
// console.log(myStringDate.getMonth()) //5
// console.log(myStringDate.getFullYear()) //2024

// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// Functions  (function declaration - function expression)

// function funName(){
//     implementation
// }

// funName() -> calling function

// function printMessage() {
//     console.log("hello")
// }

// printMessage()
// printMessage()

// function with parameters (arguments)

// function printMessageParam(message) {
//     console.log(message)
// }

// printMessageParam("hello")
// printMessageParam("hi")
// printMessageParam("bye")


// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz


// function sumTwoNumbers(x, y) {
//     console.log(x + y)
// }

// sumTwoNumbers(1, 2)
// sumTwoNumbers(1, 2, 5);  //extra arguments are ignored
// sumTwoNumbers(1)


// function sumTwoNumbersValidate(x, y) {
//     if (arguments.length !== 2) {
//         throw "Arguments must be 2"
//     }

//     if (typeof x !== "number" || typeof y !== "number") {
//         throw "Arguments must be numbers"
//     }

//     console.log(x + y)
// }

// sumTwoNumbersValidate(2, 5);
// sumTwoNumbersValidate(2);
// sumTwoNumbersValidate(2, "5");
// sumTwoNumbersValidate(2, "ali");

// function sumAnyCount() {
//     var total = 0;
//     for (var i = 0; i < arguments.length; i++) {
//         total += arguments[i]
//     }
//     return total;
// }


// console.log(sumAnyCount(5, 4, 6))// [5,4,6]
// console.log(sumAnyCount(5, 4, 6, 7)) // [5,4,6,7]
// console.log(sumAnyCount(5)) //
// console.log(sumAnyCount()) //


// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// 02 - Function Expression

// var x = function(){
//     console.log("hello");
//     return 5
// }

// x(); //console ("hello")



// var result = x();   //hello //5
// console.log(result)

// // console.log(x());

// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// variable scope

// var x = 10
// y = 20;

// console.log(x)
// console.log(y)


// var => global variable + function scope
// y = 20 => implicit globally variable => global variable + not function scope


// local scope   (var  +  implicit are global scopes)
// if (true) {
//     var x = 10;
//     y = 20;
// }

// console.log(x, y)

// for (var i = 0; i < 5; i++) {
//     console.log(i)
// }
// console.log(i)


// function cannotAccessX(){
//     var x = 10;  //function scope
// }

// console.log(x)  //Uncaught ReferenceError: x is not defined



// var x = 20;
// function func1() {
//     var x = 10;  //function scope  => global inside all function
//     console.log(x);  //10

//     function func2() {
//         console.log(x) //10
//     }

//     func2()
// }


// func1();
// console.log(x) //20


// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// var x = 20;
// function func1() {
//     console.log(x);   //20

//     function func2() {
//         console.log(x)   //20
//     }

//     func2()
// }


// func1();
// console.log(x)   //20



// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz


var x = 20;
// reassign x =10
function func1() {
   var x = 10;  //implicit globally scope
    console.log(x);  //10

    function func2() {
        console.log(x) //20  10
    }

    func2()
}


func1();
console.log(x) //20   10   //20


// var y = 10;
// console.log(y)

// //reassign
// y = 20;
// console.log(y)
