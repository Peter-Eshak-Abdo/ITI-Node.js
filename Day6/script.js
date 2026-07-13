var str = prompt("Enter a string");
var choice = prompt("Consider Case? (yes/no)");

if (choice.toLowerCase() == "no") {
  str = str.toLowerCase();
}

var reverseStr = str.split("").reverse().join("");

if (str == reverseStr) {
  document.write("Palindrome");
} else {
  document.write("Not Palindrome");
}
document.write("<hr>");
// --------------------------------------------------------------

var str55 = prompt("Enter a string");
var count = 0;

for (var i = 0; i < str55.length; i++) {
  if (str55[i].toLowerCase() == "e") {
    count++;
  }
}

document.write("Number of e " + count);
document.write("<hr>");
//-------------------------------------------------------------------------------------

var radius = prompt("What is radios");

var area = Math.PI * Math.pow(radius, 2);

alert("Total area " + area);

document.write("<hr>");
// ------------------------------------------
var num = prompt("What is square root");

var result = Math.sqrt(num);

alert("the square root " + num + " is " + result);

document.write("<hr>");
//---------------------------------------------------------
var arr = [];

for (var i = 0; i < 3; i++) {
  arr[i] = Number(prompt("Enter number " + (i + 1)));
}

document.write(
  "<p>sum " + arr.join("+") + " = " + arr[0] + arr[1] + arr[2] + "</p>",
);
document.write(
  "<p>multi " + arr.join("*") + " = " + arr[0] * arr[1] * arr[2] + "</p>",
);
document.write(
  "<p>divited " + arr.join("/") + " = " + arr[0] / arr[1] / arr[2] + "</p>",
);

document.write("<hr>");
// ---------------------------------

var arr = [];

for (var i = 0; i < 5; i++) {
  arr[i] = Number(prompt("Enter number " + (i + 1)));
}

var desc = arr.slice();
desc.sort((a, b) => b - a);

document.write("<p>sort descending " + desc.join(",") + "</p>");

var asc = arr.slice();
asc.sort((a, b) => a - b);

document.write("<p>sort ascending " + asc.join(",") + "</p>");
document.write("<hr>");
