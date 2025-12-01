// -------------------- EXPLICIT TYPE CONVERSION --------------------
// Jab hum khud manually ek value ko number, string, ya boolean me convert karte hain
// Number(), String(), Boolean() → explicit conversion ke liye use hota hai


// -------------------- NUMBER CONVERSION --------------------
console.log(Number("42"));          // 42 → valid numeric string → number me convert
console.log(Number("42px"));        // NaN → number + text convert nahi hota
console.log(Number(true));          // 1 → boolean → true = 1
console.log(Number(false));         // 0 → boolean → false = 0
console.log(Number(null));          // 0 → null → 0 hota hai
console.log(Number(undefined));     // NaN → convert nahi ho sakta
console.log(Number(""));            // 0 → empty string → 0 hota hai
console.log(Number("abcd"));        // NaN → text convert nahi hotta


// Arithmetic shortcuts (fast conversion to number)
console.log(typeof (+"10"));        // number → +string = number
console.log(typeof (-"10"));        // number → -string = number
console.log(typeof ("10" * 1));     // number → *1 multiply karne se string number ban jati hai


// -------------------- STRING CONVERSION --------------------
console.log(String(123) + " : " + typeof String(123));         // "123" : string
console.log(String(true) + " : " + typeof String(true));       // "true" : string
console.log(String(null) + " : " + typeof String(null));       // "null" : string
console.log(String(undefined) + " : " + typeof String(undefined)); // "undefined" : string

console.log(123 + '');       // "123" → '' add karne se string conversion
console.log(true + '');      // "true" → boolean string ban gaya


// -------------------- BOOLEAN CONVERSION --------------------
// Boolean() truthy or falsy values ko boolean me convert karta hai

console.log(Boolean(0));        // false → 0 falsy
console.log(Boolean(1));        // true → non-zero true
console.log(Boolean("hello!")); // true → non-empty string truthy
console.log(Boolean(123));      // true → non-zero number truthy
console.log(Boolean(""));       // false → empty string falsy
console.log(Boolean([]));       // true → empty array truthy
console.log(Boolean({}));       // true → empty object truthy

// !! → Fast boolean conversion
console.log(!!"hello");         // true → non-empty string truthy
console.log(!!0);               // false → 0 falsy


// -------------------- PRACTICAL USAGE EXAMPLE --------------------
const user = {name: "adarsh", age: 22};
console.log((user.age + ' jain'));  // "22 jain" → number + string = string concatenation


let age = "10";
console.log(Number(age) + 5);       // "10" → number 10 → 10 + 5 = 15


// -------------------- EQUALITY vs STRICT EQUALITY --------------------
//  ==  → loose comparison (type coercion allowed)
//  === → strict comparison (type coercion allowed nahi)

console.log(0 == false);   // true → 0 false ke equal mana jata hai (type conversion hota hai)
console.log(0 === false);  // false → number ≠ boolean (type same nahi → false)
