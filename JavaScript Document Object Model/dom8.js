console.log("Welcome to DOM 8")

let element;

// Children
// element = document.getElementById("inner").children[1].style.background = "red"
// element = document.getElementById("inner").children;
// element = document.getElementById("inner").children[1];


// element = document.getElementById("inner").children[0].style.background = "red"
// element = document.getElementById("inner").children[0];
// element = document.getElementById("inner").children[0].innerHTML;
// console.log(element)


// ChildNodes
// element = document.getElementById("inner").childNodes[1].style.background = "yellow"
// element = document.getElementById("inner").childNodes;
element = document.getElementById("inner").childNodes[1].innerHTML;
console.log(element)