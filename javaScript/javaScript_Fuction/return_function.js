// -------------------------
// Function with PARAMETERS
// -------------------------
function square(num) {   // num → parameter
    let sq = num * num;
    console.log("The square of " + num + " is : " + sq);
}

// 5 → ARGUMENT (value passed to the function)
console.log(square(5));  
// NOTE: square() does NOT return anything → default return value = undefined



// ------------------------------------------------
// Function accepting MULTIPLE arguments as inputs
// ------------------------------------------------
function createProfile(name, points) {
    console.log("Hello, " + name + " you have " + points + " points to play the game!");
}

let whatsIsReturned = createProfile("anurag", 100.20);
// RETURNS undefined because createProfile() has no return statement

console.log(whatsIsReturned); // undefined



// ------------------------
// Passing ARRAY as argument
// ------------------------
function sum(arr) {  // arr → parameter
    console.log(arr);
}

sum([1,2,3,4]);  // array passed as argument



// ------------------------
// Passing OBJECT as argument
// ------------------------
function printObj(obj) {
    console.log(obj);
}

printObj({name: "govind"}); // object passed as argument



// -----------------------------
// Passing FUNCTION as argument
// CALLBACK example
// -----------------------------
function printFunc(func) {  // func → parameter (function callback)
    console.log(func);  // prints function definition
    func();             // calling the passed function
}

function greet() {
    console.log("Hello!");
}

printFunc(greet); // greet is passed as ARGUMENT



// --------------------------------------
// Function RETURNING values (not printing)
// --------------------------------------
function add(a, b) {
    return a + b;  // returning result
}

// Function takes another function as argument (callback)
function getSquareOfSum(a, b, add) {
    let sum = add(a, b);  // calling callback add()
    return printNum(sum * sum); // return final formatted string
}

function printNum(num) {
    return "Here is your beautiful number, tanaaaa : " + num;
}

let sq = getSquareOfSum(10, 20, add); 
// add passes → (10 + 20) = 30 → 30*30 = 900 → message returned

console.log(sq);
// Output: Here is your beautiful number, tanaaaa : 900



// -------------------------------------------------------------
// CALLBACK FUNCTION EXAMPLE (concept understanding, no output)
// -------------------------------------------------------------
// function funcName(func) {   // func parameter (will receive callback)
//     console.log(func);
//     func();                 // execute the callback
//     return func;            // you can also return a callback
// }



// -------------------------------------------------------------
// ❌ ERROR EXAMPLE — ReferenceError: func is not defined
// Explanation: func() is called BEFORE func variable is assigned
// -------------------------------------------------------------
func(); // ❌ func is not defined yet → ERROR

let func = function () {  // function expression assigned later
    console.log("Hello!");
};

// WHY ERROR?
// `let func` is in TEMPORAL DEAD ZONE until this line executes



// ---------------------------
// Variables declaration order
// ---------------------------
let a = 10;   // block-scoped, not hoisted for usage before declaration

var b = 20;   // var is hoisted but initialized with undefined
