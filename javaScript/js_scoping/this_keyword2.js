// let obj1 = {
//     name: "alice",
//     greet() {
//         console.log(this.name);
//         // Here 'greet' is a normal function (method) inside an object.
//         // So 'this' refers to the object that calls this method → obj1
//     }
// };

// obj1.greet();   // Output: alice
// // Because obj1 is calling greet(), so this.name → "alice"



// let obj2 = {
//     name: "alice",
//     greet: () => {
//         this.name = "anurag!";
//         console.log(this);
//     }
// };

// obj2.greet();




// let obj2 = {
//     name: "alice",

//     greet1: () => {
//         this.name = "anurag1!";
//         console.log(this);
//         // Arrow function → 'this' = global scope (NOT obj2)
//     },

//     greet2() {
//         this.name = "anurag2!";
//         console.log(this);
//         // Normal function → 'this' = obj2
//     },

//     greet3: function() {
//         this.name = "anurag3!";
//         console.log(this);
//         // Function expression but normal function → 'this' = obj2
//     }
// };

// obj2.greet3();   
// // Output: obj2 with updated name = "anurag3!"
// // Because greet3 is a normal function → this = obj2




// let obj1 = {
//     name: "Alice",
//     greet() {
//         setTimeout(function() {
//             console.log(this.name);
//         }, 1000);
//     }
// }

// obj1.greet();




let obj2 = {
    name: "Alice",
    greet() {
        setTimeout(() => {
            console.log(this.name);
        }, 5000);
    }
}

obj2.greet();




console.log("Hello 1!");
console.log("Hello 2!");
console.log("Hello 3!");
console.log("Hello 4!");
