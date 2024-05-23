// global scope
var c = 8000;

// local scope
if(true){
    let a = 100;
    const c = 300;
    var b =200;
}

//console.log(a); // undefined 
//console.log(c); // undefined
console.log(b); // printed