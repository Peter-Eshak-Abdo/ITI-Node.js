// Dom Document Object Model

// Dom Traversal

// console.log(document.children[0])
//<html>
//  <head></head>  //0
//  <body></body>  //1
// </html>
// console.log(document.children[0].children[0]) //<head></head>
// console.log(document.children[0].children[1]) //<body></body>

// console.log(document.body) //<body></body>

// var element = document.body.firstElementChild.children[0];
// console.log(element);


// selection methods

// 01-getElementsByTagName -> return HTMLCollection => []
// var myDivTag = document.getElementsByTagName("div")[0];
// console.log(myDivTag);

// 02-getElementsByClassName -> return HTMLCollection => []
// var myDivClass = document.getElementsByClassName("last-div")[0];
// console.log(myDivClass);

// 03-getElementById -> return one element (first element if "duplicated")
// var myParagraphID = document.getElementById("id-para");
// console.log(myParagraphID);

// 04-querySelector -> return first element matched
// var mySpan = document.querySelector("span");
// console.log(mySpan)

// 05-querySelectorAll -> return NodeList => []
// var myAllSpans = document.querySelectorAll("span");
// console.log(myAllSpans)

// querySelector('tagName')
// querySelector('.className')
// querySelector('#idName')

// console.log(document.querySelector("span a"))

// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// working with attributes

// var myAnchorID = document.getElementById("my-a");
// console.log(myAnchorID);

// myAnchorID.setAttribute("href", "https://www.youtube.com/")
// myAnchorID.setAttribute("target", "_blank")
// myAnchorID.href = "https://www.facebook.com/"; //direct property access

// console.log(myAnchorID.getAttribute("href"));
// console.log(myAnchorID.href);

// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// Styling

// 01-Modify class
// var myParagraphID = document.getElementById("id-para");
// console.log(myParagraphID);

// myParagraphID.classList.add("red-class")
// // myParagraphID.classList.remove("red-class")

// // 02-Inline style
// myParagraphID.style.backgroundColor ="yellow";
// myParagraphID.style.color ="black";
// myParagraphID.style.fontSize ="22px";

// // style attribute
// myParagraphID.setAttribute("style","color:lightGreen; background-color: purple");


// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// create element and modify

// var myH2 = document.createElement("h2");
// myH2.style.backgroundColor = "green";
// myH2.style.color = "white";
// myH2.textContent = "Hello Iam H2";

// console.log(myH2);

// var myCopyElement = myH2.cloneNode(true);

// myCopyElement.style.backgroundColor = "black";
// console.log(myCopyElement);

// myH2.style.backgroundColor = "purple";
// console.log(myH2);
// console.log(myCopyElement);




// // append to DOM

// document.body.append(myH2);

// var myDivAppend = document.getElementById("append-div");
// console.log(myDivAppend);
// myDivAppend.append(myH2)


// cloning

// var myDivID = document.getElementById("div-id");
// console.log(myDivID);

// var myCopyElement = myDivID.cloneNode(true);  //copy selected element with its children (deep clone)
// // var myCopyElement = myDivID.cloneNode(false); //copy only selected element
// console.log(myCopyElement)


// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz


// Event handling

// var newDiv = document.getElementById("new");
// console.log(newDiv);

// function changeColor(){
//     newDiv.style.backgroundColor = "green"
// }

// function changeColor(div){
//     div.style.backgroundColor = "green"
// }


// function sayHello(msg){
//     console.log(msg)
// }

// sayHello("hello")


function alertData(x){
    alert(x.textContent)
}