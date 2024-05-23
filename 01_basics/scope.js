// global scope
var c = 8000;

// local scope
if(true){
    let a = 100;
    const c = 300;
    var b =200;
}

 // {}  <- is a scope  

//console.log(a); // undefined 
//console.log(c); // undefined
//console.log(b); // printed


function one (){
    const name = "krish";


    function two(){
        const site = " youtube"
        console.log(name);
    }
    //console.log(site);

    two()
}

//one()
if(true){
    const name = "krish"

    if(name == "krish"){
        const site = "youtube"
        // console.log(name +" " +  site);
    }
    //console.log(site);
}
// console.log(name);

// ******************************************************************

console.log(addOne(5));
function addOne (num){
    return num + 1
}


// mini hoisting
const addTwo = function(num){
    return num + 2;
}
addTwo(7);

