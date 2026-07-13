const myDivCloneer = document.getElementById("divCloneer");
const myDivAppend = document.getElementById("append-div");

function cloneDiv() {
  const youDivCloned = document.createElement("div");

  youDivCloned.style.width = "200px";
  youDivCloned.style.height = "200px";
  youDivCloned.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215,
  ).toString(16)}`;

  myDivAppend.appendChild(youDivCloned);
}
myDivCloneer.style.width = "200px";
myDivCloneer.style.height = "200px";
