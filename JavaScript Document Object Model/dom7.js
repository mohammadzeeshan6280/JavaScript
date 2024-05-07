console.log("Welcome to Dom 7")

// Parent Element
let element;
// element = document.getElementById("inner").parentElement;
// element = document.getElementById("outer").parentElement;
// element = document.body.parentElement;
//element = document.head.parentElement;

// element = document.getElementById("inner").parentElement.innerHTML;
// element = document.getElementById("inner").parentElement.innerText;
// element = document.getElementById("inner").parentElement.style.backgroundColor= "blue";
// element = document.getElementById("child-C").parentElement.style.backgroundColor= "blue";

// element = document.getElementById("child-C").parentElement;
// console.log(element)

//  Parent Node
element = document.getElementById("child-C").parentNode.style.backgroundColor= "blue";

element = document.getElementById("child-C").parentNode;
console.log(element)
