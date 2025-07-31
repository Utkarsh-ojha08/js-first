// primitive datatype
// 7 types

//7 types : String , Number , Boolean, null, undefined, Symbol, Bigint

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

// referencev(non primitive)
// Array, Objects, Functions

const heros = ["abc", "def", "xyz"]

let myObj = {
    name: "utkarsh",
    age: 22,
}

const myFunction = function(){
    console.log("hello")
}

console.log(typeof myFunction);

