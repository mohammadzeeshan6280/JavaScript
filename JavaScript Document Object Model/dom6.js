console.log("Welcome to dom6")

let element;

document.getElementById("header").addEventListener("click",abc)

// ClassList Add Class
// function abc(){
//     document.getElementById("header").classList.add("xyz", "efg")
//     let a = document.getElementById("header").classList;
//     console.log(a)
// }

// ClassList remove Class
// function abc(){
//     document.getElementById("header").classList.remove("xyz")
//     let a = document.getElementById("header").classList;
//     console.log(a)
// }

// ClassList length Class
// function abc(){
//         document.getElementById("header").classList.length;
//         let a = document.getElementById("header").classList.length;
//         console.log(a)
//     }

    // ClassList Toggle Class
    // function abc(){

    //     document.getElementById("header").classList.toggle("xyz");
        
    //     let a = document.getElementById("header").classList;
    //     console.log(a)
    // }

    // ClassList item Class
    function abc(){

        // let a = document.getElementById("header").classList;
        let a = document.getElementById("header").classList.item(2);
        console.log(a)
    }

    // ClassList containes Class ---> True & Flase
    function abc(){
        let a = document.getElementById("header").classList.contains("xyz");
        console.log(a)
    }