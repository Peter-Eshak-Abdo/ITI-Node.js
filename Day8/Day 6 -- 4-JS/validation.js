var inp = document.querySelector("input");
console.log(inp)


var errorSpan = document.getElementById("validateError");
console.log(errorSpan)


function validationSubmit(e) {
    // console.log(e);
    // e.preventDefault();

    if (inp.value === "") {
        e.preventDefault();
        errorSpan.textContent = "you should fill this input"
    }

    else if (isFinite(inp.value)) {
        e.preventDefault();
        errorSpan.textContent = "you should enter characters only"
    }

}


function inputValidation() {
    if (isFinite(inp.value)) {
        errorSpan.textContent = "you should enter characters only"
    }
    else {
        errorSpan.textContent = ""
    }
}

// wait time then do
// setTimeout(function () {
//     console.log("hello")
// }, 5000)


// // do each time selected
// var clearIntervalVariable = setInterval(function () {
//     console.log("hello")
// }, 500  )


// function clearInt(){
//     clearInterval(clearIntervalVariable)
// }