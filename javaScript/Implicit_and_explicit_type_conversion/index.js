console.log([] == []);    
// false
// Reason: Arrays are reference type.
// Do not compare values → compares memory location.
// [] and [] are two different places in memory ⇒ false.


console.log({} == {});    
// false
// Objects are also reference type.
// Two different objects in memory are never equal ⇒ false.


console.log(1 == 1);      
// true → primitive values compare by value, not by reference.



let a = [];
let b = a;
console.log(a == b);
// true
// Both variables point to the SAME array in memory → reference is same.



console.log('' == '');    
// true → both empty strings (primitive) and have identical value.


console.log(0 == 0);      
// true → primitive comparison, value is same.


console.log("abcd" == "abcd");
// true → both primitive strings, same value.



console.log([] == ![]);
// STEP 1: ![] → [] is truthy → !true = false
// STEP 2: false → 0 (in number conversion)
// STEP 3: [] converts to "" and then to 0
// Final comparison → 0 == 0 → true



console.log(!![]);
// [] -> truthy → ![] = false → !![] = true
// !! used for boolean conversion → ALWAYS TRUE for arrays.



console.log(true == []);
// true → 1 (number conversion)
// [] → 0
// 1 == 0 → false



console.log(true == ![]);
// STEP 1: ![] = false  (because [] is truthy)
// STEP 2: true → 1
// STEP 3: false → 0
// Compare → 1 == 0 → false





console.log(1 == 1);      
// true → primitive equality

console.log([] == []);    
// false → reference comparison for arrays

console.log([] == ![]);  
// true → [] → 0, ![] → false → 0 → 0 == 0 → true
