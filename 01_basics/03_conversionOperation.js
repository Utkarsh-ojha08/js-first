let score = undefined

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)//N of Number must be capital
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);

// 1 => true; 0 =. false
//"" => false
// "utkarsh" => true
let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


// *********operation************ 

let value = 3;
let negValue = -value;
console.log(negValue);

console.log()

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**2)
console.log(2/2)
console.log(2%3)

let str1 = "hello "
let str2 = "utkarsh"
let str3 = str1 + str2

console.log(str3);

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

let gameCounter = 100
gameCounter++;
console.log(gameCounter); 