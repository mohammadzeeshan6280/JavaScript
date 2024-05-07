console.log("Welcome to DOM 18")

// let target1 = document.getElementById("list-1").firstElementChild;
// let target2 = document.getElementById("list-2").firstElementChild;

// let equal = target1.isEqualNode(target2)
// console.log(equal)


let target1 = document.getElementById("list-1").children[1];
let target2 = document.getElementById("list-2").children[1];
let equal = target1.isEqualNode(target2)
console.log(equal)

