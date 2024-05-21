// const tinder = new Object()    //<- singleton Objects
const tinder = {}
tinder.id = "123"
tinder.name = "samrat"
tinder.isloggedIn = false

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userFullname : {
            firstname:"krish",
            lastname: "mungalpara"
        }
    }
}

//console.log(regularUser.fullname.userFullname.firstname);

const obj1 = {1: "A", 2:"B"};
const obj2 = {3: "C", 4:"D"};

// const obj3 = Object.assign( obj2 , obj1)
// const obj3 = {...obj1,...obj2}
// console.log(obj3);


const obj = [{
    name: "krish",
    age: 18
}]

console.log(tinder);
console.log(Object.keys(tinder));
console.log(Object.values(tinder));
console.log(Object.entries(tinder));
console.log(tinder.hasOwnProperty('isloggedIn'));


