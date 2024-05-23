const user = {
    name:  "krish",
    price : 999,

    welcomeMessage :  function (){
        console.log(`${this.name} ,  welcome to website`);
        //console.log(this)
    }
}

// this = to refer current context

// user.welcomeMessage()
// user.name = "krunal"
// user.welcomeMessage()
// console.log(this);




//***************************arrow fuction */
// function hello(){
//     let name = "krish"
//     console.log(this.name);
// }
// hello()

const hello = () => {
    const name ="krish"
    console.log(`this is ${name}`);
}
// hello()

// const addition = (num1,num2) => {
//     return num1 + num2      //explicit return
// }

// const addition = (num1,num2) => (num1 + num2)   //implicit return
// console.log(addition(3,5));


const myName = () => ({
    name : "krish"
})


// const myArray = [1,2,3,4,5,6]

// myArray.forEach()
