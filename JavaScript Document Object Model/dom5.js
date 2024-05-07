console.log("Welcome to tut 5")

let element;

// document.getElementById("header").onclick = abc;
// document.getElementById("header").ondblclick = abc;
// document.getElementById("header").onmouseenter = abc;
// document.getElementById("header").onmouseleave = abc;
// document.getElementById("header").onmousedown = abc;

// function abc(){
//     document.getElementById("header").style.backgroundColor = "purple"
// }

// addEventListener
// document.getElementById("header").addEventListener("click", abc)
// document.getElementById("header").addEventListener("mouseenter", xyz)


// function abc(){
//     document.getElementById("header").style.color = "white"
// }
// function xyz(){
//     document.getElementById("header").style.backgroundColor = "green"
// }


// document.getElementById("header").addEventListener("mouseenter", abc)
// document.getElementById("header").addEventListener("click", abc)
// document.getElementById("header").addEventListener("click", function(){
//     // document.getElementById("header").style.border = "10px solid blue"
//     this.style.border = "10px solid blue"
// })


// function abc(){
//     document.getElementById("header").style.backgroundColor = "grey"
// }


// removeEventListener
document.getElementById("header").addEventListener("mouseleave", abc)

document.getElementById("header").addEventListener("click", xyz)

function abc(){
    document.getElementById("header").style.backgroundColor = "red"
}
function xyz(){
    document.getElementById("header").removeEventListener('mouseleave', abc)
}
