// Write a JavaScript program to get the integers in range (x, y) using recursion
// Example: range(2, 9)
// Expected output: [3, 4, 5, 6, 7, 8]

let arr = [];
function rangNum(a,b){
  let i = a+1;
  let c = b-1 ;
  for(i; i<= c ; i++){
    arr.push(i);
  }
  return arr;
}
console.log (rangNum(2,7));


