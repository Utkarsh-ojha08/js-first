// singleton
//object.create  => see it l8r

//object.literals
const mySym = Symbol("myKey1")

const JsUser = {
    "full name" : "Utkarsh Ojha",
    age : 18,
    location : "lucknow",
    email : "utkarsh@google.com",
    isloggedIn: false,
    [mySym] : "myKey1",
    lastLoginDays: ["maonday","Thursday"]
}

console.log(JsUser.email);
console.log(JsUser["email"])

console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

// Making change in object
JsUser.email = "utkarsh@chatgpt.com"
 console.log(JsUser.email);
 // making object unchangable

 Object.freeze(JsUser)
JsUser.email = "utkarsh@facebook.com"
 console.log(JsUser);

 // function creation in js


 JsUser.greeting = function(){
    console.log("hello JsUser");
 }

 JsUser.greeting2 = function(){
    console.log(`hello js user ${this["full name"]}`);
    
 }
 console.log(JsUser.greeting());
 
 console.log(JsUser.greeting2());
