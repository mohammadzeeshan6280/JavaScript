// import {message} from "./library.js"
// console.log(message)
// document.body.innerHTML = message;

// import {message ,user} from "./library.js"
// user();
// user("Mohammad zeeshan");
// user("Mohammad zeeshan",25);
// console.log(user("Mohammad zeeshan",25));

// import {message,user ,test} from "./library.js"
// console.log(message)
// user("Mohammad zeeshan",25);

// let a = new test();

// Modules Fucntion Name Shorthand Name Alias Name
// import {message,user,test} from "./library.js"
// import {message,user as us ,test} from "./library.js"
// console.log(message)
// console.log(user("Mohammad zeeshan",25));
// console.log(us("Mohammad zeeshan",25));
// let a = new test();

// Modules Fucntion Name Shorthand  *
// import {message,user,test} from "./library.js"
// import * as ansari from "./library.js"
// console.log(ansari.message)
// console.log(ansari.user("Mohammad zeeshan",25));
// let a = new ansari.test();

// Modules default Fucntion Name 
// import {default as ansari} from "./library.js"
// ansari();

// Modules Fucntion Name default Name
// import ansari from "./library.js"
// ansari();

// Modules Fucntion Name default Name
// import ansari from "./library.js"
// import { message, user } from "./library.js";
// ansari();
// console.log(message)
// console.log(user("MOHAMMAD ZEESHAN"))


import { user } from "./bridge.js"

console.log(user());


