// -------------------------------
// Default parameters in functions
// -------------------------------

// Here `a` and `b` are PARAMETERS (variables inside function definition)
// b = 20 → default parameter (used only when no 2nd argument is provided)
function add(a, b = 20) {
    console.log(a + b);
}

// Calling the function → values passed are ARGUMENTS
add(10);        // a = 10, b = 20 (default used) → Output: 30
add(10, 50);    // a = 10, b = 50 (default ignored) → Output: 60



// -----------------------------------
// Functions with different parameters
// -----------------------------------

function greet() {
    console.log("Hello!");    // No parameter → always prints Hello
}

function personalisedGreet(name) {   // name is a parameter
    console.log("Hello, " + name);
}

function veryPersonalisedGreet(name, time) {  // 2 parameters
    console.log("Hello " + name + ", Good " + time);
}

// Calling with ARGUMENTS
greet();                                      // no argument
personalisedGreet("Anurag");                  // "Anurag" → argument
veryPersonalisedGreet("Govind", "evening");   // "Govind" & "evening" → arguments


// -----------------------------------------------------
// Function "overloading" DOES NOT work in JavaScript!
// -----------------------------------------------------

// All functions below have the same name → "add"
// But JS does NOT support function overloading based on parameter count

function add(a, b) {
    console.log(a + b);
}

function add(a, b, c) {
    console.log(a + b + c);
}

function add(a, b, c, d) {
    console.log(a + b + c + d);
}

function add(a, b, c, d, e) {
    console.log(a + b + c + d + e);
}

// ⚠️ Important:
// Only the LAST "add" function will exist (others are overwritten).
// So calling add(10, 20) will try to execute the LAST function
// and will give NaN because c, d, e are undefined.

add(10, 20);     // 10 + 20 + undefined + undefined + undefined = NaN
add(10, 20, 30); // 10 + 20 + 30 + undefined + undefined = NaN
add(10, 20, 30, 40); // 10 + 20 + 30 + 40 + undefined = NaN
add(10, 20, 30, 40, 50); // 10 + 20 + 30 + 40 + 50 = 150