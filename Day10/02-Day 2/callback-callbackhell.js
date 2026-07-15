function fetchData(callback) {
    setTimeout(() => {
        const data = "hello"
        callback(data)
    }, 5000)
}

fetchData((result) => {
    console.log(result)
})

// fetchData1 fetchData2
// data 1 -->  data 2 --> data 3
// user   -->  post   --> comment


function fetchData1(callback) {
    setTimeout(() => {
        const data1 = "returned data 1 ";
        callback(data1)
    }, 2000)
}
// ready --> (data1)

function fetchData2(data1, callback) {
    setTimeout(() => {
        const data2 = data1 + "data2";
        callback(data2)
    }, 1000)
}

// fetchData2 --> data2 (data1 + data2)

function fetchData3(data2, callback) {
    setTimeout(() => {
        const data3 = data2 + "data3"
        callback(data3)
    }, 1000)
}

fetchData1((data1) => {
    // ready data1
    fetchData2(data1, (data2) => {
        // ready data2 -> data1 + data2
        fetchData3(data2, (data3) =>
            console.log(data3))
    })
})
