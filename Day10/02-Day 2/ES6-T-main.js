// // // async await ==> simulate work sync

// // function fetchData1() {
// //     return new Promise((res, rej) => {
// //         setTimeout(() => {
// //             res("data1 ");
// //             rej("error in data1");
// //         }, 2000)
// //     })
// // }

// // function fetchData2(data1) {
// //     return new Promise((res, rej) => {
// //         setTimeout(() => {
// //             res(data1 + "data2 ");
// //             rej("error in data2");
// //         }, 1000)
// //     })
// // }

// // function fetchData3(data2) {

// //     return new Promise((res, rej) => {
// //         setTimeout(() => {
// //             res(data2 + "data3")
// //             rej("error in data3")
// //         }, 1000)
// //     })
// // }

// // async function fetchAllData() {
// //     try {
// //         const data1 = await fetchData1();
// //         const data2 = await fetchData2(data1);
// //         const data3 = await fetchData3(data2);
// //         console.log(data3);
// //     }
// //     catch (error) {
// //         console.log(error)
// //     }
// // }
// // fetchAllData()

// console.log("1")
// const promise = new Promise((resolve) => {
//     console.log("2");
//     resolve("resolved");
// });

// promise.then((res) => {
//     console.log("3");
//     console.log("5");
// })

// console.log("4")

// localStorage.setItem("name" , "ahmed");
// localStorage.setItem("course" , "JS");

console.log(localStorage.getItem("course"));

localStorage.removeItem("course");
// localStorage.clear()

// sessionStorage.setItem("name" , "ahmed");
// sessionStorage.setItem("course" , "JS");

// console.log(sessionStorage.getItem("course"))

// sessionStorage.removeItem("course");
// localStorage.clear()

// --------------------------------------------------------------
function fetchData(callback) {
  setTimeout(() => {
    const data = "hello";
    callback(data);
  }, 5000);
}

fetchData((result) => {
  console.log(result);
});

// fetchData1 fetchData2
// data 1 -->  data 2 --> data 3
// user   -->  post   --> comment

function fetchData1(callback) {
  setTimeout(() => {
    const data1 = "returned data 1 ";
    callback(data1);
  }, 2000);
}
// ready --> (data1)

function fetchData2(data1, callback) {
  setTimeout(() => {
    const data2 = data1 + "data2";
    callback(data2);
  }, 1000);
}

// fetchData2 --> data2 (data1 + data2)

function fetchData3(data2, callback) {
  setTimeout(() => {
    const data3 = data2 + "data3";
    callback(data3);
  }, 1000);
}

fetchData1((data1) => {
  // ready data1
  fetchData2(data1, (data2) => {
    // ready data2 -> data1 + data2
    fetchData3(data2, (data3) => console.log(data3));
  });
});

// --------------------------------------------------------------
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
    }, 2000);
  });
}

function fetchData2(data1) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(data1 + "data2 ");
      rej("error in data2");
    }, 1000);
  });
}

function fetchData3(data2) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(data2 + "data3");
      rej("error in data3");
    }, 1000);
  });
}

fetchData1()
  .then((data1) => fetchData2(data1))
  .then((data2) => fetchData3(data2))
  .then((data3) => console.log(data3))
  .catch((error) => console.log(error));
