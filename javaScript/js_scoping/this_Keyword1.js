console.log(this);  
// When code runs in the global execution context,
// 'this' refers to the Global Object
// (Browser → window object | Node.js → global object)


function func() {
    console.log(this);
    // A regular function, when called normally, does not have any owner object,
    // so 'this' again refers to the Global Object.
}
func();  // Called in the global context → 'this' = Global Object


class Person {
    constructor(name) {
        // Inside a constructor, 'this' refers to the new object being created.
        this.name = name;
    }

    printInfo() {
        console.log(this);
        // Here 'this' refers to the object that invokes printInfo() method.
    }
}

const p1 = new Person("Anurag");
// 'new' keyword creates a brand-new object, so here 'this' becomes p1.
p1.printInfo();  // Output: 'this' = p1 object


function Person(name) {
    // This is function-based object creation (constructor function).
    this.name = name;
    console.log(this);
    // When called using 'new', 'this' refers to the newly created object.
}

const p2 = new Person("Govind");   // Here 'this' = p2 object
console.log(p2.name);              // Output: Govind


// Now 'this' inside an arrow function ↓
const Person1 = (name) => {
    this.name = name;
    console.log(this);
    // ⚠ Arrow functions never create their own 'this'.
    // They inherit 'this' from their surrounding (outer) scope.
    // Because of this, arrow functions cannot be used as constructors.
};

// ❌ new Person1("Ram") → TypeError (because arrow function can't be used with 'new')


// Calling constructor function WITHOUT 'new'
Person("Govind");
// Here 'this' becomes the Global Object because we did not use 'new'.
// So the 'name' variable gets added to the global object → ❌ NOT recommended!
