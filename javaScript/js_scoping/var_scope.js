// var keyword scope is function-scoped or globally-scoped
// It does NOT have block scope like let and const



var msg = "I am a global variable!";  //this is  global scope variable

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
    var a = "Inside the function";   // function (local) scope
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
    var b = 10;   // 'var' ignores block scope → becomes global
    console.log(b); // ✔ prints 10 (inside block)
}
console.log(b);   // ✔ prints 10 (because 'var' leaked out of the block)

