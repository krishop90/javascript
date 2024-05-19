// primitive 
// 7 types : string Number Boolean null undefined Symbol BigInt


// reference type (Non primitive)
// Array Objects Functions

// javascripts is dynamic type of language 

// const heros = ["krish" , "ironman" , "thor"];
// let myObj = {
//     name: "krishh",
//     age: 19,
// }
// console.log(myObj);
// let myFunction =  function(){
//     console.log("hello world");
// }
//  console.log(myFunction);


 //********************************************************* */

 //Stack (primitive)  Heap(non primitive)

 let myName = "krish";
 let anotehrName = myName;
anotehrName = "krunal";
 console.log(anotehrName);
 console.log(myName);

 let useOne = {
    email: "user@gmail.com",
    age : 19
 }

 let useTwo = useOne;
useTwo.email= "krish@gmail.com";
console.log(useOne.email);
console.log(useTwo.email);

// we got copy from stack and 
// we got reference from heap(actual value)