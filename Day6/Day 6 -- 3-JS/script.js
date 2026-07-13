// var num = "ali";
// console.log(typeof num)

// console.log(+num)
// console.log(typeof +num)

var str1 = "25.6";
var str2 = "25.3%";

// built in object (Number)

// console.log(+str1)   //25.3 (number)
// console.log(+str2)   //NaN

// console.log(Number(str1)) //25.3 (number)
// console.log(Number(str2)) //NaN

// methods (function)
// parseInt & parseFloat => string to number

// 25.3 => 25 -> remove after .
// console.log(parseInt(str1)) //25
// console.log(parseInt(str2)) //25

// return number as its
// console.log(parseFloat(str1))
// console.log(parseFloat(str2))


// eval -> Evaluates JavaScript code and executes it.
// var str3 = "2+3*20-8";
// console.log(eval(str3))

// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// var num = 5;
// console.log(String(num))
// console.log(typeof String(num))


// var num = "5";
// console.log(typeof Number(num));
// console.log(Number(typeof num));
// console.log(Number("string"));


// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// String

// create string
// zzzzzzzzzzzzzz

// 01- string primitive
// var str1 = "ali";
// console.log(str1)
// console.log(str1[1])
// console.log(str1.length)
// console.log(typeof str1)  //string --> primitive

// 01- string object
// var str3 = new String("ahmed");
// console.log(str3)
// console.log(str3[1])
// console.log(str3.length)
// console.log(typeof str3)  //object -> non-primitive

// indexes:
// a   h   m   e   d    length
// 0   1   2   3   4      5
//-5  -4  -3  -2  -1      5

// str[1] = h
// str[4] = d

// // zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// var str = "ahmeddd";
// // a   h   m   e   d   d   d  length
// // 0   1   2   3   4   5   6     5
// //-7  -6  -5  -4  -3  -2    -1   5


// // 01-charAt(number of index) return character
// console.log(str.charAt(4));
// console.log(str[4])

// // zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// // 02-indexOf(char)   return  number   count from start
// console.log(str.indexOf("d"))

// // zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// // 03-lastIndexOf(char) return  number  count from end
// console.log(str.lastIndexOf("d"))

// // zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// // 04-toUpperCase() / toLowerCase()
// console.log(str.toUpperCase())

// // zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// // 05-trim() remove white space (start / last)
// var strWithSpaces = "    ahmed    ";
// console.log(strWithSpaces.trim())

// // zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// // a   h   m   e   d   d   d  length
// // 0   1   2   3   4   5   6     5
// //-7  -6  -5  -4  -3  -2  -1     5

// // 06-substring(from , to)  not include end
// console.log(str.substring(1,4))

// // zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// // 07-slice(start , end) [negative] counts from end
// console.log(str.slice(1,4))
// console.log(str.slice(-4,-1))

// // zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// // 08-split(delimiter , limit) -> string to array (return array)
// var sentence = "Hello world how are you"
// console.log(sentence)
// console.log(sentence.split(" "))
// console.log(sentence.split(" ",3))

// var sentence = "Hello*world*how*are*you"
// console.log(sentence.split("*"))

// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz


// // ?name=ahmed&age=20&gender=male
// // "name=ahmed&age=20&gender=male"&hobby=football

// var myString = "name=ahmed&age=20&gender=male&hobby=football"
// console.log(myString.split("&"))

// var splittedString = myString.split("&")
// console.log(splittedString);

// for(var i = 0 ; i < splittedString.length ; i++){
//     console.log(splittedString[i].split("=")[1])
// }



// [1,2,3,4,5,6,7]  -> arr[3]
// {a:1 , b:2 , c:3} -> object.a , object.b


// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz


// Regular Expression
// var regexEmail = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+");  //pattern
// console.log(regexEmail.test("hello@"))
// console.log(regexEmail.test("geon@ihateregex.io"))



// do{
//     var res = prompt("enter your email")
// }while(regexEmail.test(res) === false)
//     console.log(res)

// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// Math --> static class
// console.log(Math.pow(2,3))
// console.log(Math.sqrt(16))
// console.log(Math.min(20,5,60,30,70,10))
// console.log(Math.max(20,5,60,30,70,10))
// console.log(Math.random())
// console.log(Math.floor(5.7))   //5  //bottom
// console.log(Math.ceil(5.7))    //6  //top
// console.log(Math.trunc(5.7))   //5  //remove after .

// console.log(Math.floor(-5.7))   //-6
// console.log(Math.trunc(-5.7))   //-5  //remove after .



// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// array

// var fruits = ["apple" , "banana"];
// console.log(fruits)
// console.log(typeof fruits)

var fruitsObj = new Array("mango", "watermelon")
// console.log(fruitsObj)
// console.log(typeof fruitsObj)


var myArr = ["apple", "banana", "mango"];

// for (var i = 0; i < myArr.length; i++) {
//     console.log(myArr[i]);
// }
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// 01-concat()  return new ARRAY
// Does not modify original array

var newArray = myArr.concat(fruitsObj);
console.log(newArray)
console.log(myArr)

// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// 02-join()  return new STRING
// Does not modify original array

console.log(myArr.join("-")) //string "apple-banana-mango"
var newArr = myArr.join("-");
console.log(newArr.split("-")) //array ['apple', 'banana', 'mango']

// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// 03-tostring()  by default -> separator = [,]
// Does not modify original array
console.log(myArr.toString())

// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// 04-pop() remove and return last element
// **modify original array**

console.log(myArr);
var lastElement = myArr.pop();
console.log(lastElement);
console.log(myArr);

// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// 05-push() add at last of array
// **modify original array**

myArr.push("watermelon");
console.log(myArr);

// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// 06-shift()  remove and return first element
// **modify original array**

var firstElement = myArr.shift();
console.log(firstElement);
console.log(myArr);

// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// 07-unshift() add at first of array
// **modify original array**
myArr.unshift("strawberry");
console.log(myArr);

// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// 08-reverse()
// **modify original array**
myArr.reverse()
console.log(myArr);

// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// 09-sort() sort alpha or numeric
// **modify original array**
var numbers = [5, 9, 3, 10, 6, 7, 4, 1];
numbers.sort();
console.log(numbers)

numbers.sort((a, b) => a - b);
console.log(numbers)

//  a - b < 0      => a comes before b
//  a - b > 0      => b comes before a
//  a - b = 0      => keep their order

// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// 10-slice() return NEW array
// Does not modify original array

var slicedArray = myArr.slice(0,2)
console.log(slicedArray);
console.log(myArr)

// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// 11-splice(start , counter of deleted element , added elements) add / remove element at any position
// **modify original array**

myArr.splice(1,0,"mango","mango")
console.log(myArr);

// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz




var myArray = [1,2,3,17,30,50,80,10,20,5,6,7];

// var sum = arr[0] + arr[1] + arr[2] + arr[3]
// var multi = arr[0] * arr[1] * arr[2]
// var sum = arr[0] / arr[1] / arr[2]

// initial sum = 0   multi=1