var child;

function openWind() {
    child = window.open("page2.html");
}

function closeWind() {
    child.close();
}


function printWind() {
    window.print()
}

function historytTab() {
    // history.back()
    // history.forward()
    history.go(-1)
}

function replacePage() {

    location.replace("http://www.google.com")
}