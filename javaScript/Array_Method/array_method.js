// 📌 Array Example with different data types

// Array can store multiple types of values
let arr = [
    1,                  // number
    9.8,                // decimal number
    "laxmi",            // string
    [1, 2, 3, 4, 5],    // nested array
    { name: "ritika" }  // object
];

// Accessing array elements using index (index starts from 0)
console.log(arr[0]); // 1
console.log(arr[1]); // 9.8
console.log(arr[2]); // "laxmi"

// Accessing elements of the nested array (arr[3])
console.log(arr[3][0]); // 1
console.log(arr[3][1]); // 2
console.log(arr[3][2]); // 3
console.log(arr[3][3]); // 4
console.log(arr[3][4]); // 5

// Accessing object property inside array
console.log(arr[4].name); // "ritika"

// Printing complete array
console.log(arr);

// ➕ push() → adds element at the END of array
arr.push(6);

// ➕ unshift() → adds element at the START of array
arr.unshift(9);

// Array after push and unshift
console.log(arr);

// ➖ pop() → removes element from the END of array
arr.pop();

// ➖ shift() → removes element from the START of array
arr.shift();

// Final array after pop and shift
console.log(arr);

/*
📌 Key Points to Remember:

1️⃣ Array index always starts from 0
2️⃣ Array can contain:
   - numbers
   - strings
   - arrays
   - objects
3️⃣ push() & pop() work at the END
4️⃣ unshift() & shift() work at the START
*/
