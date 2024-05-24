//***************************if statement********************************

/*
<,>,<=,>=,==,!=,===

age = 17
if(age == 18){
    console.log("you're eligible");
}
else if(age < 18){
    console.log("you're not eligible");
}
else{
    console.log("greater than 18");
}
*/



// const score = 200
// if(score > 100){
//     const power = "fly";
//     console.log(`user powwer : ${power}`);
// }
// console.log(`user powewr : ${power}`);

// const userLoggedIn = true;
// const debitcard = true;

// if(userLoggedIn && debitcard && 2==2){
//     console.log("allow for shopping");
// }
// else{
//     console.log("not alowed for shopping");
// }




/********************SWITCH CASE******************************* */


const month = 1;
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;

    default:
        console.log("no month");
        break;
}



/********************TRUTHY AND FALSY VALUES***************************** */


const userEmail = []
if(userEmail){
    console.log("got the email");
}
else{
    console.log("don't got email");
}

// FALSY values : false , 0 , -0 , BIgInt 0n , "" , null , undefined , NaN
// TRUTHY values : true , "0" , 'false' , " " , [] , {} , function(){} , 


const myObject = {}

if(Object.keys(myObject).length == 0){
    console.log("object is empty");
}



/**********NULLISH COALESCING OPERATOR (??)******************************************** */

// null undefiend

let val1;
val1 = 5 ?? 10;
val1 = null ?? 10
val1 = undefined ?? 15
val1  = undefined ?? null
console.log(val1);




/******TERNIARY COONDITION************************************************ */

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");;
