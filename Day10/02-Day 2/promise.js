// Promise =>Built In Object return success or failed
// .chaining

// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve("data received");
//         reject("error");
//     }, 1000)
// });

// myPromise.then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error)
// })



function fetchData1() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("data1 ");
            rej("error in data1");
        }, 2000)
    })
}


function fetchData2(data1) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(data1 + "data2 ");
            rej("error in data2");
        }, 1000)
    })
}

function fetchData3(data2) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(data2 + "data3")
            rej("error in data3")
        }, 1000)
    })
}


fetchData1()
    .then(data1 => fetchData2(data1))
    .then(data2 => fetchData3(data2))
    .then(data3 => console.log(data3))
    .catch(error => console.log(error))