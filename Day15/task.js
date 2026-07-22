// Question 1
console.log("Question 1");
const arr = [1, 2, 3, 4];
const result = arr
  .filter((x) => x % 2 === 0)
  .map((x) => x * 3)
  .reduce((a, c) => a + c, 0);
console.log(result);
console.log("///////////////////////////////////////////////////");
// Question 2
console.log("Question 2");
function calc(a, b, op) {
  return op(a, b);
}
const sum = (x, y) => x + y;
const multiply = (x, y) => x * y;
console.log(calc(2, 3, sum));
console.log(calc(2, 3, multiply));
console.log(calc(5, 2, (a, b) => a - b));
console.log("///////////////////////////////////////////////////");
// Question 3
console.log("Question 3");
const user = {
  name: "Ahmed",
  normal() {
    console.log(this.name);
  },
  arrow: () => console.log(this.name),
  nested() {
    const inner = () => console.log(this.name);
    inner();
  },
};
user.normal();
user.arrow();
user.nested();
console.log("///////////////////////////////////////////////////");
// Question 4
console.log("Question 4");
function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
const c1 = counter();
const c2 = counter();
c1();
c1();
c2();
c1();
c2();
console.log("///////////////////////////////////////////////////");
// Question 5
console.log("Question 5");
const numbers = [1, 2, 3, 4];
const output = numbers
  .map((x) => (x % 2 === 0 ? x * 2 : x))
  .filter((x) => x > 2)
  .reduce((a, c) => {
    a.push(c * 2);
    return a;
  }, []);
console.log(output);
console.log(numbers);
console.log("///////////////////////////////////////////////////");
// Question 6
console.log("Question 6");
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
console.log("///////////////////////////////////////////////////");
// Question 7
console.log("Question 7");
console.log("1");
Promise.resolve().then(() => console.log("2"));
setTimeout(() => console.log("3"), 0);
console.log("4");
console.log("///////////////////////////////////////////////////");
// Question 8
console.log("Question 8");
console.log("Start");
process.nextTick(() => console.log("nextTick"));
Promise.resolve().then(() => console.log("Promise"));
setTimeout(() => console.log("Timeout"), 0);
console.log("End");
console.log("///////////////////////////////////////////////////");
// Question 9
console.log("Question 9");
console.log("1");
setTimeout(() => {
  console.log("2");
  Promise.resolve().then(() => console.log("3"));
  process.nextTick(() => console.log("4"));
}, 0);
Promise.resolve().then(() => {
  console.log("5");
  process.nextTick(() => console.log("6"));
});
process.nextTick(() => console.log("7"));
console.log("8");
console.log("///////////////////////////////////////////////////");
// Question 10
console.log("Question 10");
const fs = require("fs");
console.log("A");
setTimeout(() => console.log("B"), 0);
setImmediate(() => console.log("C"));
Promise.resolve().then(() => console.log("D"));
process.nextTick(() => console.log("E"));
fs.readFile(__filename, () => {
  console.log("F");
  process.nextTick(() => console.log("G"));
  Promise.resolve().then(() => console.log("H"));
  setTimeout(() => console.log("I"), 0);
  setImmediate(() => console.log("J"));
});
console.log("K");
console.log("///////////////////////////////////////////////////");
// Bonus 1
console.log("Bonus 1");
console.log("1");
setTimeout(() => {
  console.log("2");
  Promise.resolve().then(() => {
    console.log("3");
    setTimeout(() => console.log("4"), 0);
  });
}, 0);
Promise.resolve()
  .then(() => {
    console.log("5");
    return Promise.resolve();
  })
  .then(() => console.log("6"));
process.nextTick(() => console.log("7"));
console.log("8");
console.log("///////////////////////////////////////////////////");
// Bonus 2
console.log("Bonus 2");
const Fs = require("fs");
console.log("Start");
Fs.readFile(__filename, () => {
  console.log("File");
  setTimeout(() => console.log("Timeout"), 0);
  setImmediate(() => console.log("Immediate"));
  Promise.resolve()
    .then(() => console.log("Promise1"))
    .then(() => console.log("Promise2"));
  process.nextTick(() => console.log("NextTick"));
});
Promise.resolve().then(() => console.log("Global Promise"));
process.nextTick(() => console.log("Global NextTick"));
console.log("End");
console.log("///////////////////////////////////////////////////");

////////////////////////////////////////////OUTPUT/////////////////////////////////////////////////////////////////
// node Day15/task.js
// PS P:\Projects\ITI> node Day15/task.js
// Question 1
// 18
// ///////////////////////////////////////////////////
// Question 2
// 5
// 6
// 3
// ///////////////////////////////////////////////////
// Question 3
// Ahmed
// undefined
// Ahmed
// ///////////////////////////////////////////////////
// Question 4
// 1
// 2
// 1
// 3
// 2
// ///////////////////////////////////////////////////
// Question 5
// [ 8, 6, 16 ]
// [ 1, 2, 3, 4 ]
// ///////////////////////////////////////////////////
// Question 6
// A
// C
// ///////////////////////////////////////////////////
// Question 7
// 1
// 4
// ///////////////////////////////////////////////////
// Question 8
// Start
// End
// ///////////////////////////////////////////////////
// Question 9
// 1
// 8
// ///////////////////////////////////////////////////
// Question 10
// A
// K
// ///////////////////////////////////////////////////
// Bonus 1
// 1
// 8
// ///////////////////////////////////////////////////
// Bonus 2
// Start
// End
// ///////////////////////////////////////////////////
// nextTick
// 7
// E
// 7
// Global NextTick
// 2
// Promise
// 5
// D
// 5
// Global Promise
// 6
// 6
// B
// 3
// Timeout
// 2
// 4
// 3
// B
// 2
// 3
// C
// 4
// F
// G
// H
// File
// NextTick
// Promise1
// Promise2
// J
// Immediate
// I
// Timeout
