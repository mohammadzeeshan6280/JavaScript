console.log("Welcome to Dom 3")

let element;
// querySelector
// element = document.querySelector("#header");
// element = document.querySelector(".list");
// element = document.querySelector(".list li");
// console.log(element)


// querySelectorAll
// element = document.querySelectorAll("#header");
// element = document.querySelectorAll(".list");
// element = document.querySelectorAll(".list")[0];
// element = document.querySelectorAll(".list")[0].innerHTML;
// element = document.querySelectorAll(".list")[0].innerText;

element = document.querySelectorAll("#header h1")
element = document.querySelectorAll("#header h1")[0]
element = document.querySelectorAll("#header h1")[0].innerHTML;


// element = document.querySelectorAll(".list li");
// element = document.querySelectorAll(".list li")[4];
// element = document.querySelectorAll(".list li")[4].innerHTML;
console.log(element)