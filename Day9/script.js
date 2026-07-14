var a = 10;
var b = 20;
[a, b] = [b, a];
console.log("a =", a);
console.log("b =", b);
// ----------------------------------------------------------------------------
function minMax(...arr) {
  var min = Math.min(...arr);
  var max = Math.max(...arr);
  return { max, min };
}
var result = minMax(1,64,1,540,4,84189,891,894,14,9);
console.log("Min =", result.min);
console.log("Max =", result.max);
// ----------------------------------------------------------------------------
var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

console.log(
  fruits.every(function (item) {
    return typeof item === "string";
  }),
);

console.log(
  fruits.some(function (item) {
    return item.startsWith("a");
  }),
);

var newFruits = fruits.filter(function (item) {
  return item.startsWith("b") || item.startsWith("s");
});
console.log(newFruits);

var likedFruits = fruits.map(function (item) {
  return "I like " + item;
});
console.log(likedFruits);

likedFruits.forEach(function (item) {
  console.log(item);
});
