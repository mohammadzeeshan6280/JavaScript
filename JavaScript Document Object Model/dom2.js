console.log("Welcome to Dom video 2")

let element;


// Dom Get Methods
// InnerText
// element = document.getElementById("header").innerText
// element = document.getElementById("content").innerText


// InnerHTML
// element = document.getElementById("header").innerHTML
// element = document.getElementById("content").innerHTML
// console.log(element)


// getAttribute
// element = document.getElementById("header").getAttribute("class")
// element = document.getElementById("header").getAttribute("id")
// element = document.getElementById("header").getAttribute("style")
// element = document.getElementById("header").getAttribute("onclick")
// console.log(element)



//  getAttributeNode
// element = document.getElementById("header").getAttributeNode("onclick")
// element = document.getElementById("header").getAttributeNode("style")
// element = document.getElementById("header").getAttributeNode("class").value;
// console.log(element)




// Attributes
// element = document.getElementById("header").attributes;
// element = document.getElementById("header").attributes[1];
// element = document.getElementById("header").attributes[2].value;
// element = document.getElementById("header").attributes[1].name;
// console.log(element)


// Dom Set Methods
// innerText
// element = document.getElementById("header").innerText = "<p>Ansari</p>"
// element = document.getElementById("header").innerText = "<h1>Developer</h1>"
// console.log(element)


// innerHTML
// element = document.getElementById("header").innerHTML = "<h1>WhiteHat</h1>"
// console.log(element)

// setAttribute
// element = document.getElementById("header").innerHTML = "<h1>Developer</h1>"

// element = document.getElementById("header").setAttribute("class", "ansari")

// element = document.getElementById("header").setAttribute("style", "border:10px solid green")

// element = document.getElementById("header").getAttribute("class")
// console.log(element)

// Attributes
// element = document.getElementById("header").innerHTML = "<h1>Developer</h1>"

// element = document.getElementById("header").attributes;
// element = document.getElementById("header").attributes[1];
// element = document.getElementById("header").attributes[1].value = "zeeshan";

// element = document.getElementById("header").getAttribute("class")
// console.log(element)


// Remove Attributes
element = document.getElementById("header").innerHTML = "<h1>Developer</h1>"


element = document.getElementById("header").attributes[1].value = "zeeshan";

element = document.getElementById("header").removeAttribute("style")

element = document.getElementById("header").removeAttribute("class")

element = document.getElementById("header").getAttribute("class")
console.log(element)



