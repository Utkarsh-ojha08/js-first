//dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());

console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleTimeString())


let myCreatedDate = new Date(2025,1,8,20,00)

console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

console.log(myTimeStamp)
console.log(myCreatedDate.getTime());

let newDate = new Date()

console.log(newDate.getMonth())
console.log(newDate.getDay())
console.log(newDate.getHours())
console.log(newDate.getTime())
console.log(newDate.getMinutes())

newDate.toLocaleString('default',{
   weekday: "long" 
})