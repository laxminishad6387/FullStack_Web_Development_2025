// + operator (agar string involved ho) → numbers ko string me convert kar deta hai (Concatenation)
console.log("5" + 2);      // Output: "52" → 2 string ban gaya → "5" + "2"
console.log(2 + 3.5);      // Output: 5.5 → dono number hai isliye normal addition

// -, *, /, % operators → strings ko number me convert kar dete hain (Numeric Conversion)
console.log("5" - 2);      // Output: 3 → "5" number ban gaya → 5 - 2
console.log("5" * 2);      // Output: 10 → "5" number ban gaya → 5 * 2
console.log("5" / 2);      // Output: 2.5 → "5" number ban gaya → 5 / 2
console.log("5" % 2);      // Output: 1 → "5" number ban gaya → 5 % 2 (remainder)

// boolean + number → boolean number me convert hota hai (true = 1, false = 0)
console.log(true + 1);     // Output: 2 → 1 + 1
console.log(false + 0);    // Output: 0 → 0 + 0

// string + boolean → boolean ko string me convert karke concatenate karega
console.log("3" + true);   // Output: "3true" → boolean string ban gaya ("true")

// - operator number conversion karega → true = 1
console.log("3" - true);   // Output: 2 → 3 - 1

// null number conversion → 0 ban jata hai
console.log(null + 1);     // Output: 1 → 0 + 1

// undefined number conversion nahi hota → NaN result milta hai
console.log(undefined + 1); // Output: NaN
