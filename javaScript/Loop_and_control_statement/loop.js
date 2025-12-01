// Basic FOR loop syntax
// for(initial value; condition to check; increment/decrement) {
//      code to repeat
// }

// Print values from 1 to 5
for (let i = 1; i <= 5; i++) {   // start at 1 → run until 5 → increase by 1
    console.log(i);             // prints: 1, 2, 3, 4, 5
}


// Print even numbers from 2 to 10
console.log("Even!");
for (let i = 2; i <= 10; i += 2) {  // increase by 2 every time
    console.log(i);                // prints: 2, 4, 6, 8, 10
}


// Print odd numbers from 1 to 10
console.log("Odd!");
for (let i = 1; i <= 10; i += 2) { // odd numbers increase by 2 each step
    console.log(i);               // prints: 1, 3, 5, 7, 9
}


// Printing even numbers using IF condition
console.log("If condition even numbers!");
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) console.log(i);  // number divisible by 2 is even
}

console.log("The loop completed!");


// Looping through array using index
let names = ["vaibhav", "ajmer", "mahaveer", "someone"];
console.log(names.length);  // total number of elements in array

for (let i = 0; i < names.length; i++) {  // loop from 0 to last index
    console.log(names[i]);                // prints each name
}



// WHILE LOOP syntax
// while(condition) {
//     code
// }

// Print odd numbers using while loop: 1 to 10
let i2 = 1;
while (i2 <= 10) {
    console.log(i2);   // prints odd numbers: 1, 3, 5, 7, 9
    i2 += 2;           // increase by 2 each time
}
console.log("while loop completed, i2: " + i2);


// Infinite loop example (logic mistake)
let x = 10;
while (x > 0) {
    console.log(x);  // prints 10 then keeps increasing forever
    x++;             // increases instead of decreasing (mistake)
}
// this loop never ends (infinite loop)
// console.log("while loop completed x : " + x); → will never execute



// DO-WHILE loop
// Executes at least once even if condition is false
let i = 0;
do {
    i++;
    console.log(i);      // prints 1
} while (i <= -1);        // condition is false on first check
console.log("Loop end! i : " + i); // prints 1



// BREAK example — stops loop immediately
for (let i = 0; i <= 10; i++) {
    console.log(i);
    if (i == 4) {
        console.log("Breaking the loop at:", i);
        break;            // exit loop when i becomes 4
    }
}
console.log("Out of the loop!");



// CONTINUE example — skip specific values
let i1 = 1;
while (i1 <= 10) {
    if (i1 == 5 || i1 == 8) {
        i1++;             // move to next value
        continue;         // skip printing 5 and 8
    }
    console.log(i1);      // prints all except 5 and 8
    i1++;
}
console.log("Out of the loop! i1 : " + i1);
