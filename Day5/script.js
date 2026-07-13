var data = prompt("Enter Any String");
for (var i = 1; i < 7; i++) {
  document.write(`<h${i}>` + data + `</h${i}>` + "</br>");
}

// -------------------------------------------------------------------------------

var nValue = prompt("Enter Number of Value you will Enter");
var sum = 0;

for (var i = 1; i < (+nValue+1); i++) {
  var value = prompt("Enter Number" + i + " of " + nValue);

  sum += (+value);
  if (isNaN(+value) || (+value) == 0 || sum > 101) {
    break;
  }
}
document.write("<h1> Total " + sum + "</h1>");

// -------------------------------------------------------------------------------

do {
  var name = prompt("Enter You Name Plesas");
  var birthYear = prompt("Enter You سنة ميلادك Plesas");
  console.log(+birthYear);
  console.log(typeof +birthYear);

} while (isNaN(+birthYear) || +birthYear > 2010);

document.write("<h1> Name: " + name + " Birth Year:: " + birthYear + " Age:"+ (2026 - +birthYear) + "</h1>");
