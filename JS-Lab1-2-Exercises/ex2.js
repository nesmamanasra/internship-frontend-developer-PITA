//Write a JavaScript program to display the current day and time in the following format: 
//Today is: Tuesday
//Current time is : 10 PM : 30 : 38

const date = new Date();

const n = date.getDay();
const nameDay = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];

const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();

console.log('Today is: ' + nameDay[n]);
let prepand = (hour >= 12)? " PM ":" AM ";

console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);