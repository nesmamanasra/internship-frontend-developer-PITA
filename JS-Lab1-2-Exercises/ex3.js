//Write a JavaScript program to rotate the string 'jsherolab' 
const str = 'jsherolab';
let char = '';
for(let i= str.length-1; i>=0;i--){
  char += str[i]
}
console.log(char);