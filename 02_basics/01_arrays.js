// array

const myArr =[0,1,2,3,4,5]
const myHeros = ["iron-man", "hulk", "thor"]

console.log(myArr[1]);
console.log(myHeros[2]);


// Arrays Method

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(5)
console.log(myArr);

myArr.shift()
console.log(myArr);

console.log(myArr.includes(8));
console.log(myArr.indexOf(1));
console.log(myArr.indexOf(8));

const newArr = myArr.join()

console.log(myArr);
console.log(typeof newArr);


// slice & splice


console.log("A" , myArr)

const myN1 = myArr.slice(1,3)
console.log(myN1);
console.log("B" , myArr);


const myN2 = myArr.splice(1,3);
console.log(myN2);
console.log("C" , myArr);







