var x = 100;    // global/module scope => x = 100

function func() {
    var y = 200;    // function (local) scope => y is available only inside func

    console.log(x, " : ", y);     // 100 : 200
}

func();
console.log(x);     // 100





var x = 100;    // global scope
console.log(x); // 100

{                   
    var x = 200;    // same global scope (var does NOT follow block scope)
    console.log(x); // 200
}

console.log(x);     // 200






var x = 100;        // global scope
console.log(x);     // 100

{
    let x = 200;    // block / local scope
    console.log(x); // 200
    x = 300;
    console.log(x); // 300
}

console.log(x);     // 100
