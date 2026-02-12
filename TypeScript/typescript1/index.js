var a = true;
console.log(a);
var b = "hello"; //any take any data type..this is not good for typescript.beacuse we use typescript for checking of strict data type in compile time
console.log(b);
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 20));
var person = {
    name: "laxmi nishad",
    age: 24,
    address: {
        address1: "india",
    },
    details: {
        course: "cse",
    }
};
function data(obj) {
    console.log(person.details.course);
}
console.log(data(person));
