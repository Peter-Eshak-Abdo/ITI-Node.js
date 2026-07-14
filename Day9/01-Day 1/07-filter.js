const names = ["ali", "ahmed", "mohamed"];

const filteredNames = names.filter((name) => name.startsWith("a"));
console.log(filteredNames);



// pure js code
var filterNative = function (arr, fn) {
    var newArr = []

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            newArr.push(arr[i])
        }
        // if(    === true)
    }
    return newArr;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumbers = filterNative(numbers, (number) => number % 2 === 0);

console.log(evenNumbers)