console.log("Welcome to DOM 15")

let target = document.getElementById("list1").children[0];
// let copyElem = target.cloneNode()
// let copyElem = target.cloneNode(false)
let copyElem = target.cloneNode(true)

console.log(copyElem)


// document.getElementById("list2").appendChild(copyElem)
document.getElementById("box").appendChild(copyElem)