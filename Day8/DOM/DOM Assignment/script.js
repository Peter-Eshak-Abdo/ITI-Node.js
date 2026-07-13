var originalImg = document.getElementById("mainImage");
var clonedImg = document.createElement("img");


var footerDiv = document.createElement("div");
footerDiv.style.textAlign = "left";
clonedImg.src = originalImg.src;
footerDiv.appendChild(clonedImg);

document.body.appendChild(footerDiv);

var navigation = document.getElementById("navigation");
navigation.style.display = "inline-block";
originalImg.style.float = "right";
originalImg.style.display = "block";
navigation.style.textAlign = "left";
