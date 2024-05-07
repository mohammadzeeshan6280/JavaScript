console.log("Welcome to 12")
// DOM Append Methods
// 1. appendChild
// 2. insertBefore

// appendChild
// let elem = document.createElement("h2")
// let  text = document.createTextNode("This is just heading")
// elem.appendChild(text)
// document.getElementById("test").appendChild(elem)
// console.log(elem)

// let elem2 = document.createElement("p")
// let  text2 = document.createTextNode("This is just para")
// elem2.appendChild(text2)
// document.getElementById("test").appendChild(elem2)
// console.log(elem2)


// let elem = document.createElement("h2")
// let  text = document.createTextNode("This is just heading")
// let newComment = document.createComment("this is just comment")
// elem.appendChild(text)
// document.getElementById("test").appendChild(elem)
// document.getElementById("test").appendChild(newComment)
// console.log(elem)


// insertBefore
let elem = document.createElement("h2")
let text = document.createTextNode("This is just heading")
elem.appendChild(text)
let target = document.getElementById("test")
target.insertBefore(elem, target.childNodes[1])

console.log(elem)