// let keyword scope is function-scoped or globally-scoped and block-scoped

let msg = "I am a global variable!";  //this is  global scope variable

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
// BLOCK SCOPE WITH let/const
// -------------------------------------------------
// Variables declared with let/const inside {} are BLOCK SCOPED.
if (true) {
    let b = 10;   // 'let' respects block scope → remains inside block
    console.log(b); // ✔ prints 10 (inside block)
}
console.log(b);   // ❌ ERROR — 'b' is not accessible outside the block




// -------------------------------------------------
// EXAMPLE COMPARISONS
// -------------------------------------------------
let x = 100;        // global scope
console.log(x);     // 100
{
    let x = 200;    // block / local scope
    console.log(x); // 200
    x = 300;
    console.log(x); // 300
}
console.log(x);     // 100