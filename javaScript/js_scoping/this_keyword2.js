let obj1 = {
    name: "alice",
    greet() {
        console.log(this.name);
        // Here 'greet' is a normal function (method) inside an object.
        // So 'this' refers to the object that calls this method → obj1
    }
};

obj1.greet();   // Output: alice
// Because obj1 is calling greet(), so this.name → "alice"



let obj2 = {
    name: "alice",
    greet: () => {
        this.name = "anurag!";
        console.log(this);
    }
};

obj2.greet();
// Output: global object (window in browser, global in Node.js)
// Because greet is an arrow function,
// so 'this' refers to the surrounding (outer) scope → global object




let obj3 = {
    name: "alice",

    greet1: () => {
        this.name = "anurag1!";
        console.log(this);
        // Arrow function → 'this' = global scope (NOT obj2)
    },

    greet2() {
        this.name = "anurag2!";
        console.log(this);
        // Normal function → 'this' = obj2
    },

    greet3: function() {
        this.name = "anurag3!";
        console.log(this);
        // Function expression but normal function → 'this' = obj2
    }
};

obj3.greet3();   
// Output: obj3 with updated name = "anurag3!"
// Because greet3 is a normal function → this = obj2




let obj4 = {
    name: "Alice",
    greet() {
        setTimeout(function() {
            console.log(this.name);
        }, 1000);
    }
}

obj4.greet();




let obj5 = {
    name: "Alice",
    greet() {
        setTimeout(() => {
            console.log(this.name);
        }, 5000);
    }
}

obj5.greet();




console.log("Hello 1!");
console.log("Hello 2!");
console.log("Hello 3!");
console.log("Hello 4!");
