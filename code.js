// code.js

function eventHandler(event) {
    console.log(event.keyName);
}

var node = document.getElementById("ball");
node.addEventListener("keydown", eventHandler, false);