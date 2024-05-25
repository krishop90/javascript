// const coding = ["js" , "php" , "java" , "pyhton"]
// const val = coding.forEach((item) => {
//     console.log(item );
//     return item
// })
// console.log(val);

/*****************    FILTER   ******************************************** */

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const values = myNums.filter((num) => { 
//     return num > 4
// })
// console.log(values);

// const newNums = []
// myNums.forEach((num) => {
//     if(num > 4){
//         newNums.push(num)    }
// })
// console.log(newNums);



/**********  MAPS  ********************************************** */




// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.map((num) => {
//     return num + 10
// })

// console.log(newNums);

// const newNums = []
// myNums.forEach((num) => {
//     newNums.push(num+10);
// })
// console.log(newNums);


/*****************  CHAINING ********************************************* */


// const myNum = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNum
//                       .map((num) => num * 10)
//                       .map((num) => num + 1)
//                       .filter((num) => num>30)
                      

// console.log(newNums);




/*********** REDUCE   ********************************************************************** */

// const myArr = [1,2,3]

// const SumWithInitial = myArr.reduce(function (acc , currval) { 
    // console.log(`acc value : ${acc} and current value : ${currval}`);
    //     return acc + currval
    // } , 0)
    
//     const SumWithInitial  = myArr.reduce((acc , currval) => {
//         return acc + currval
// } , 0)

// console.log(SumWithInitial);


const ShoppinCart = [{
    itemName : " js course",
    itemPrice : 1800,
    Tutor : "hitesh Choudhary"
}
,
{
    itemName : " java course",
    itemPrice : 2000,
    Tutor : "Aman dhattarwal"
},
{
    itemName : " web dev",
    itemPrice : 2500,
    Tutor : "code with harry"
}]


const temp = ShoppinCart.reduce((acc , item) => {
        return acc + item.itemPrice
} , 0)

console.log(temp);