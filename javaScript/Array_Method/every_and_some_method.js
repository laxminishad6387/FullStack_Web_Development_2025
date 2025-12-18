// ------------------ ARRAY ------------------

let arr = [2, 4, 6, 8, 9];


// ------------------ every() EXAMPLE ------------------

// This function checks:
// "Are ALL elements in the array even?"
function isEven(arrr) {

    // every() runs the callback for each element
    // If ALL return true → final result is true
    // If even ONE returns false → final result is false
    return arr.every((eachElement) => {

        // Check if the number is even
        // 2 % 2 == 0 → true
        // 9 % 2 == 0 → false
        return eachElement % 2 == 0;
    });
}


// ------------------ every() WITH POSITIVE CHECK ------------------

// This function checks:
// "Are ALL elements positive?"
function arePos(arr) {

    // If any element is <= 0 → returns false
    return arr.every((eachElement) => eachElement > 0);
}


// ------------------ some() EXAMPLE ------------------

// This function checks:
// "Is there AT LEAST ONE negative element?"
function isAtleastOneNeg(arr) {

    // some() returns true if ANY ONE element satisfies condition
    // If none satisfy → returns false
    return arr.some((eachElement) => eachElement < 0);
}


// ------------------ MARKS EXAMPLE (REAL-LIFE) ------------------

let marks1 = [40, 50, 60, 70, 80];   
// Rule: < 50 = Fail
// If even ONE student fails → whole class failed

let marks2 = [50, 50, 60, 70, 80];


// This function checks:
// "Did ALL students pass?"
function isThePass(marks) {

    // every() ensures all marks are >= 50
    return marks.every(eachMark => {
        return eachMark >= 50;
    });
}


// ------------------ OUTPUT ------------------

console.log(isThePass(marks1)); // false → one student scored 40 (fail)
console.log(isThePass(marks2)); // true  → all students passed
