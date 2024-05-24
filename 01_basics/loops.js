// for loop

// for (let i = 0;  i <=10; i++) {
//     console.log(`outer loop value : ${i}`);

//     for (let j = 0; j <= 10; j++) {
//         console.log(`inner loop value ${j} and outrt loop ${i}`);
        
//     }
// }
/*
for (let i = 1; i <=20; i++) {
    console.log(`value of i is : ${i}`);
    if(i == 5){
        console.log("5 is best");
        break;
    }
}
for (let i = 1; i <=20; i++) {
    console.log(`value of i is : ${i}`);
    if(i == 5){
        console.log("5 is best");
        continue;
    }
}
*/


/**********************WHILE LOOP and DO WHILE LOOP****************************/

// let count = 1;
// while(count != 51){
//     console.log(count);
//     count++;
// }

// var count = 0;
// do {
//     count++;
//     console.log(count);
// } while (count != 10);



/************HIGH ORDER ARRAY LOOPS************************************************/

// FOR OF LOOP

//["","",""]
//[{},{},{}]


// const arr = [1,2,3,4,5]

// for (const value of arr) {
//     console.log(value);
// }

// const greeting = "hello"

// for (const greet of greeting) {
//     console.log(`for each char : ${greet}`);
// }

/************       MAP       ******************************************/

// const map = new Map()
// map.set('IN' , "india")
// map.set('AUS' , "Australia")
// map.set('USA' , "America")

// console.log(map);

// for (const [key,value] of map) {
//     console.log(key , ":-" , value);
// }

/***************OBJECT ITERATION   FOR IN LOOP**********************************/



// const myObj = {
//     game1 : 'NFS',
//     game2 : 'CS:GO'
// }

// for (const key in myObj) {
//    console.log(`${key} for values ${myObj[key]}`);
// }

// const programming = ["java" , "ruby" , "cpp" , "python"];

// for (const key in programming) {
//     console.log(programming[key]);
// }




/************FOR EACH LOOP****************************************************************/
const programming = ["js" , "java" , "python" , "cpp" , "c"]

// programming.forEach( function (item) {
//     console.log(item);
// } )


// programming.forEach( (item) => {
//     console.log(item);
// })


// function printme(item){
//     console.log(item);
// }
// programming.forEach(printme)


// programming.forEach( (item , index , arr) => {
//     console.log(item , index , arr);
// })






const myCoding = [
    {
        languageName : "javasccript",
        languageType : "single Thread",
        language : "easy"
    },
    {
        languageName : "java",
        languageType : "multi Thread",
        language : "complex"
    }
]




myCoding.forEach((item) => {
    console.log(item.languageName);
    console.log(item.languageType);
})

