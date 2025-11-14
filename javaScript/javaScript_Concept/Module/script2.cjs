let fun = require('./script1.cjs')

fun.addElement("rahul");
fun.addElement("mohit");
fun.addElement("vijay");
fun.addElement("ajay");

console.log(fun.printElement());


let fun1=require('./script1.cjs')
fun1.addElement("aman");
console.log(fun.printElement());