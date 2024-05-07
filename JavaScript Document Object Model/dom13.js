console.log("Welcome to Dom 13")

// insertAdjacentElement
// let elems = document.createElement("h2");
// let text = document.createTextNode("First Heading")
// elems.appendChild(text);
// let target = document.getElementById("test");
// // target.insertAdjacentElement("beforebegin", elems);
// // target.insertAdjacentElement("beforeend", elems);
// target.insertAdjacentElement("afterbegin", elems);
// target.insertAdjacentElement("afterbend", elems);
// console.log(target)


// insertAdjacentHTML
// let target = document.getElementById("test")
// let elem = "<h2>This is Second Heading</h2>"
// target.insertAdjacentHTML("afterbegin", elem)
// target.insertAdjacentHTML("afterend", elem)
// target.insertAdjacentHTML("beforebegin", elem)
// target.insertAdjacentHTML("beforeend", elem)


// insertAdjacentText
let target = document.getElementById("test")
let text = "This is Heading"
// target.insertAdjacentText("beforeend", text)
// target.insertAdjacentText("beforebegin", text)
// target.insertAdjacentText("afterbegin", text)
// target.insertAdjacentText("afterend", text)