const name = "utkarsh"
const repoCount = 2

console.log(name + repoCount + "value");
// it is outdated format

console.log(`my name is ${name} and my repoCount is ${repoCount} `);

const gameName = new String('utkarshpr')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('p'));

const newString = gameName.substring(0,4);
//we can't give negative value in substring
console.log(newString);

const anotherString = gameName.slice(-8 , 4);
console.log(anotherString);

const str1 = "      utkarsh    "
console.log(str1);
console.log(str1.trim());

console.log(str1.replace("utkarsh" , "Prachi"))

const str = "hello-how-are-you"
// string to array
console.log(str.split('-'));

