
document.querySelector("#inner").addEventListener("click", function(){
    alert('Inner Div')
},true) // false default value

document.querySelector("#outer").addEventListener("click", function(){
    alert('Outer Div')
},true)