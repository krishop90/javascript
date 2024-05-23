// function SayMyName(){
//     console.log("krish");
// }

// SayMyName();

// function addition (num1, num2){
//     console.log(num1 + num2);

// }


// function addition (num1, num2){
  
     // let res = num1 + num2;
     // return res;
//     return num1+num2;


// }


// const result = addition(3,8);
// console.log("result :" , result);

// function loginUsermname(username = "kri"){
//     if(!username){
//         console.log("enter name");
//         return;
//     }
//     return`${username} just logged in`
// }

// console.log(loginUsermname())
// if there is no argument passed in function it will return undefined




function CalculateCartprice(val1 , val2 , ...num1){
    return num1;
}

console.log(CalculateCartprice(200,400,600,800,900));

const user = {
    name: "krish",
    price: 100
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.name} and price is ${anyObject.price}`);
}

handleObject({
    name : "sam",
    price : 90
});

const myArray = [200,400,500]

function returnSecondValue(getArray){
    return getArray[3]
}

console.log(returnSecondValue(myArray));
console.log(returnSecondValue([200,400,500,1000]));
