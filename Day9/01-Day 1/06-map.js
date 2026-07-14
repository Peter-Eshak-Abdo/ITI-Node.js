// map
// return new array with same number of indexes of original array
// assign function on each element

const names = ["ali", "ahmed", "mohamed"];

const newNames = names.map((name, i) => `${i} - ${name} salem`);
console.log(newNames);




// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// pure js code
var mapNative = function (arr, fn) {
    var newArray = [];

    for (let i = 0; i < arr.length; i++) {
        newArray.push(fn(arr[i], i))
    }
    return newArray;
}


const NativeNames = mapNative(names, (name, i) => `${i} - ${name} salem`);
console.log(NativeNames);