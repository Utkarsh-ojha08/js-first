const score = 400
console.log(score);
 

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(3));

const otherNumber = 123.889

console.log(otherNumber.toPrecision(4));
// here it count starting 4 ignore rest of them by rounding off the value
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++ Maths +++++

console.log(Math)

console.log(Math.abs(-4));


console.log(Math.round(4.6))
console.log(Math.ceil(4.6))
console.log(Math.floor(4.6))
console.log(Math.min(4,3,6,8))
console.log(Math.max(4,3,6,8))

console.log(Math.random());
// range is from 0 to 1 

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min+  1) + min));
