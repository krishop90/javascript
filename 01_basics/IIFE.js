// immediately Invoked Function Expressions (IIFE)

(function krish(){
    console.log("connected");  //named  IIFE
})();

// ()() <= first() for definitions <= ()second for execution

// IIFE => to remove the pollution of global scope we have to use IIFE 

((name) => {
    console.log(`this is ${name}`);  //Unnamed IIFE
})('kri')