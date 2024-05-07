console.log("Welcome to DOM4")

let element;
// Style
// element = document.querySelector("#header");
// element = document.querySelector("#header");
// element = document.querySelector("#header").style.color;
// element = document.querySelector("#header").style.border;


// element = document.querySelector("#header").style.border = "10px dotted khaki";
// element = document.querySelector("#header").style.backgroundColor = "green";
// element = document.querySelector("#header").style.color = "white";
// console.log(element)



// className
// element = document.querySelector("#header").className = "xyz";
// element = document.querySelector("#header").className = "xyz abc";
// element = document.querySelector("#header").className;
// console.log(element)

// classList
// element = document.querySelector("#header").classList;
// element = document.querySelector("#header").classList = "abc xyz";
// element = document.querySelector("#header").classList[1];
// console.log(element)


// Add Class
// element = document.querySelector("#header").classList.add("xyz");
element = document.querySelector("#header").classList.add("xyz", "efg");
console.log(element)


// Remove Class
// element = document.querySelector("#header").classList.remove("efg");
element = document.querySelector("#header").classList.remove("efg","xyz");
element = document.querySelector("#header").classList;
console.log(element)




