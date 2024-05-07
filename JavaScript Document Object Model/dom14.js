console.log("Welcome to DOM 14")

// ReplaceChild
// let elem = document.createElement("li") // createElement
// let text =  document.createTextNode("Wow new Text") // createtextNode
// elem.appendChild(text) // appendChild
// let target = document.getElementById("list")
// let oldElem = target.children[0];
// // console.log(oldElem)
// target.replaceChild(elem, oldElem)



// Remove Child
let target = document.getElementById("list")
let oldElem = target.children[0]
target.removeChild(oldElem)
