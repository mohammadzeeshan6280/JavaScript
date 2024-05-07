console.log("Welcome to DOM 16")

let parentElement = document.getElementById("item");
let target = document.getElementById("abc");

let find = parentElement.contains(target)
console.log(find)