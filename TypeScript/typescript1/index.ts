let a:boolean=true;
console.log(a);

let b:any="hello"; //any take any data type..this is not good for typescript.beacuse we use typescript for checking of strict data type in compile time
console.log(b);

function sum(a:number , b:number):number{
 return a+b;
}
console.log(sum(10, 20));

let  person={
name:"laxmi nishad",
age:24,
address:{
address1:"india",

},
details:{
course:"cse",
}
}

interface person{
name:string,
age:number,
address:{
address1:string | number,
},
details:Details,

}
interface Details{
course:string,

}

function data(obj:person):string | void{
  console.log(person.details.course)
}
console.log(data(person));