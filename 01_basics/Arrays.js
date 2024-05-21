//arrays

// const myArr = [0 , 1 , 2 , 3 , 4 , 5];
// const heros = ["krish","ironman"];
// const myArray = new Array(1,2,3,4,5);

//console.log(myArr);

// array method

// myArr.push(6);
// myArr.pop();
// myArr.unshift(9);
// const newArr = myArr.join()

// console.log(typeof myArr);
// console.log(typeof newArr);
// console.log(myArr.includes(3));
// console.log(myArr.indexOf(5));




//slice , splice

// console.log("A" , myArr);


// const myArr1 = myArr.slice(1,3);
// console.log(myArr1);
// console.log("B" , myArr);

// const myArr2 = myArr.splice(1,3);
// console.log(myArr2);
// console.log("C" , myArr);


// difference between slice and splice 

const myHeros = ["thor" , "ironman" , "spidey"];
const dcHeros = ["flash" , "superman" , "batman"];


//concat

// const heros = myHeros.concat(dcHeros);
// console.log(heros);


//spread

// const heros = [...myHeros,...dcHeros];
// console.log(heros);
 
// const AnotherArray = [1,2,3,[4,5,6],7,[8,9,[10,11]]];

// const real_another_array = AnotherArray.flat(Infinity);
// console.log(real_another_array);

console.log(Array.isArray("hello"));
console.log(Array.from("krish"));

//interesting
console.log(Array.from({name: "krish"}));



let score = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score,score2,score3));




