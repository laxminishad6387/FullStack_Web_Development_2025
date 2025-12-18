// ------------------ SPLICE EXAMPLE ------------------

// Original array
let arr1 = [1, 2, 3, 4, 5];

// splice(start, deleteCount)
// start = -2 → starts from 2nd index from the end
// deleteCount = 2 → removes 2 elements starting from index 3
let removedArr = arr1.splice(-2, 2);

// removedArr contains the removed elements
console.log(removedArr);    // [4, 5]

// splice MODIFIES the original array
// After removing 4 and 5, only first three elements remain
console.log(arr1);          // [1, 2, 3]


// ------------------ SLICE EXAMPLES ------------------

let arr = [1, 2, 3, 4, 5];

// slice(start, end)
// start = 0 → begins from index 0
// end = 3 → stops before index 3
// Returns elements at index 0,1,2
let firstThree = arr.slice(0, 3);

console.log(firstThree);    // [1, 2, 3]

// slice does NOT modify the original array
console.log(arr);           // [1, 2, 3, 4, 5]


// ------------------ COPYING ARRAY ------------------

// slice(0) → copies entire array
// start = 0, end = array length (default)
let copyArr = arr.slice(0);

console.log(copyArr);       // [1, 2, 3, 4, 5]
console.log(arr);           // [1, 2, 3, 4, 5]


// slice() → also copies full array
// start = 0 (default), end = n (default)
let copyArr2 = arr.slice();

console.log(copyArr2);      // [1, 2, 3, 4, 5]


// ------------------ MORE SLICE CASES ------------------

// slice(2)
// start = 2, end = n (default)
// Returns elements from index 2 till end
console.log(arr.slice(2));     // [3, 4, 5]


// slice(-2)
// start from 2nd element from end
console.log(arr.slice(-2));    // [4, 5]


// slice(1, -1)
// start = index 1
// end = one index before last
console.log(arr.slice(1, -1)); // [2, 3, 4]


// slice(2, -2)
// start = index 2
// end = 2nd index from end
console.log(arr.slice(2, -2)); // [3]


// Original array remains unchanged throughout slice
console.log(arr);              // [1, 2, 3, 4, 5]
