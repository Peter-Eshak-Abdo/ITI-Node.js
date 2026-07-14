// spread operator (...)
// expand or spread elements of any iterable

// let arr1 = [1,2,3,4,5];
// let arr2 =[...arr1 , 6,7,8,9];
// console.log(arr2);

// let arr3 = [...arr2];
// console.log(arr3)

// let arr4 = [1,2,3];
// let arr5 =[...arr4];
// console.log(arr5);

// arr4 = [5,6,7]
// console.log(arr4);
// console.log(arr5);

//pointer 6 => [1,2,3]
//pointer 7 => [1,2,3]

// let arr6 = [1, 2, 3]
// let arr7 = arr6;

// console.log(arr7);

// // arr6[0] = 5;
// arr6.push(6)
// console.log(arr7);





// let arr1 = [1, 2, 3];
// let arr2 = arr1; //=> different pointer = [1,2,3]

// // console.log(arr1)
// console.log(arr2)


// arr1 = [5,6,7];
// // console.log(arr1)
// console.log(arr2);


// let obj1 = {a:1 , b:2};
// let obj2 = {...obj1 , b:3};

// console.log(obj2);


// let str = "hello";
// let char = [...str];
// console.log(char)



// rest operator (...)

function sum(...args) {
    return args.reduce((acc, cur) => acc + cur, 0)
}

console.log(sum())
console.log(sum(5))
console.log(sum(5,5))
console.log(sum(5,5,5))