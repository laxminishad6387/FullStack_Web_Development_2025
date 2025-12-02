// -------------------------------------------
// REST OPERATOR ( ...nums )
// -------------------------------------------
// It collects all remaining arguments into an ARRAY.
// a → 1st parameter
// b → 2nd parameter
// ...nums → rest of the arguments stored in an array
function add(a, b, ...nums) {
    console.log("a : " + a + " , " + "b : " + b); // prints first two arguments
    console.log("Rest values collected in nums --> ", nums); // nums is an array

    let sum = 0;

    // Loop to add all values inside nums array
    for (let i = 0; i < nums.length; i++)
        sum += nums[i];

    // Returning total of a + b + (sum of nums array)
    return a + b + sum;
}


// ------------------------------------------------
// CALLING FUNCTION WITH ARGUMENTS
// ------------------------------------------------

// Only two arguments provided → so a = 10, b = 20, nums = [] (empty array)
let sum = add(10, 20);

// Explanation of flow:
// a = 10
// b = 20
// nums = []  ➝ no extra arguments passed
// sum = 10 + 20 + 0 = 30

console.log("sum : " + sum);
