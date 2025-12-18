// ------------------ ORIGINAL ARRAYS ------------------

// Array of numbers
let arr1 = [1, 2, 3];

// Another number array
let arr2 = [4, 5];

// Array of strings
let arr3 = ["a", "b"];

// Mixed data types: number, string, decimal
let arr4 = [6, "abcd", 7.4];

// Boolean and a function
let arr5 = [true, () => {}];


// ------------------ CONCAT METHOD ------------------

// concat() joins multiple arrays into a NEW array
// It does NOT modify any of the original arrays
let ans = arr1.concat(arr2, arr3, arr4, arr5);


// ------------------ SPREAD OPERATOR METHOD ------------------

// Spread operator (...) takes all elements from each array
// and spreads them into a new array
// This also does NOT modify original arrays
let arr = [...arr1, ...arr2, ...arr3, ...arr4, ...arr5];


// ------------------ OUTPUT ------------------

console.log("concat method :", ans);
// Output:
// [1, 2, 3, 4, 5, "a", "b", 6, "abcd", 7.4, true, function]

console.log("spread operator method :", arr);
// Output is exactly the same as concat
// [1, 2, 3, 4, 5, "a", "b", 6, "abcd", 7.4, true, function]
