//singleton : made because of  constructor

//object literals


const sym = Symbol("key1");

const JsUSer = {
    name: "krish",
    "full name": "krish mungalpara",
    [sym]: "mykey1",      // declare the symbols
    age: 19,
    location : "jaipur",
    isloggedIn : false,
    lastLoginDays : ["Monday" , "Saturday"]
}

// console.log(JsUSer["age"]);
// console.log(JsUSer.lastLoginDays);
// console.log(JsUSer["full name"]);
// console.log(JsUSer[sym]);

// JsUSer.age = "90";
// //Object.freeze(JsUSer);   // freeze the object
// JsUSer.age = "200";
// console.log(JsUSer);


JsUSer.greeting = function(){
    console.log("hello krish");
}
JsUSer.greeting2 = function(){
    console.log(`hello krish , ${this.name}`);
}

console.log(JsUSer.greeting());
console.log(JsUSer.greeting2());

