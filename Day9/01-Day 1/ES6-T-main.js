// reduce ==> return single value

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum);

// [1,2,3,4,5]
// [2,3,4,5]
// [3,4,5]
// [4,5]
// [5]
// []

// acc     cur      acc+cur(total)  === acc
//  0       0           0
//  0       1           1
//  1       2           3
//  3       3           6
//  6       4           10
//  10      5           15


// pure js code
var reduceNative = function (arr, fn, initialValue) {
    let value = initialValue;

    for (let i = 0; i < arr.length; i++) {
        value = fn(value, arr[i], i);
        // value => accumulated value
        // arr[i] => current
        // i => index
    }

    return value;
}