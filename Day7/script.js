var userDate = prompt("Enter a date:");
function dayName(dateString) {
  var myDate = new Date(dateString);
  var days = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];
  var dayIndex = myDate.getDay();
  return days[dayIndex];
}
console.log(dayName(userDate));

//-------------------------
var firstParam = prompt("Enter first parameter:");
var secondParam = prompt("Enter second parameter:");

function checkParam(x, y) {
  if (arguments.length !== 2) {
    throw "Not more or less than 2";
  }
  console.log("OK its two Parameters");
}

try {
  checkParam(firstParam, secondParam);
} catch (e) {
  console.error(e);
}

// ---------------------------------------------------------------
var inputNumbers = prompt("Enter numbers pleas use(,):");

function sum() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] !== "number" || isNaN(arguments[i])) {
      throw "All of the arguments must be numerical values";
    }
    total += arguments[i];
  }
  return total;
}

if (inputNumbers) {
  var parsedNumbers = inputNumbers.split(",").map(Number);
  try {
    console.log(sum.apply(null, parsedNumbers));
  } catch (e) {
    console.error(e);
  }
}
// ----------------------------------------------
var inputData = prompt("Enter data by using , :");

function reverse() {
  var argsArray = Array.from(arguments);
  return argsArray.reverse();
}

if (inputData) {
  var parsedData = inputData.split(",");
  console.log(reverse.apply(null, parsedData));
}
