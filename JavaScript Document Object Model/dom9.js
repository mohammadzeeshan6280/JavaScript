console.log("Welcome to DOM 9")

let element;

// firstElementChild

// element = document.getElementById("inner").firstElementChild.style.backgroundColor = "yellow";

// element = document.getElementById("inner").firstElementChild;
// element = document.getElementById("inner").firstElementChild.innerHTML;


// element = document.getElementById("outer").firstElementChild.style.backgroundColor = "yellow";
// element = document.getElementById("outer").firstElementChild;
// console.log(element)



// lastElementChild
// t = document.getElementById("outer").lastElementChild.style.backgroundColor = "red";
// element = document.getElementById("outer").lastElementChild;
// console.log(element)

// t = document.getElementById("inner").lastElementChild.style.backgroundColor = "yellow";
// element = document.getElementById("inner").lastElementChild;
// element = document.getElementById("inner").lastElementChild;
// console.log(element)

//first Child
// element = document.getElementById("inner").firstChild;
// element = document.getElementById("child-C").firstChild;
// console.log(element)

//last Child
// element = document.getElementById("inner").lastChild;
element = document.getElementById("child-C").lastChild;
console.log(element)