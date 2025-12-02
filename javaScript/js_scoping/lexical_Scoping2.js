// -------------------------------------------------
// GLOBAL SCOPE
// -------------------------------------------------
// A variable declared outside any function or block
// becomes GLOBAL and can be accessed anywhere in the file.

let msg = "I am a global variable!";  // global scope

console.log(msg);       // ✔ accessible (global)
if (2 == 2) {
    console.log(msg);   // ✔ accessible inside block
}

function func() {
    console.log(msg);   // ✔ accessible inside function
}

func();     // output: "I am a global variable!"





// -------------------------------------------------
// FUNCTIONAL SCOPE
// -------------------------------------------------
// A variable declared inside a function is only
// accessible inside that function — NOT outside.

function testScope() {
    let a = "Inside the function";   // function (local) scope
    console.log(a);   // ✔ allowed (inside function)
}

testScope();

console.log(a);      // ❌ ERROR — 'a' is not accessible outside the function





// -------------------------------------------------
// BLOCK SCOPE WITH var vs let/const
// -------------------------------------------------
// Variables declared with let/const inside {} are BLOCK SCOPED.
// BUT var does NOT follow block scope → it becomes global if declared in a block.

if (true) {
    var a = 10;   // 'var' ignores block scope → becomes global
}

console.log(a);   // ✔ prints 10 (because 'var' leaked out of the block)
