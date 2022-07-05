//Write a function that concatenates two lists. [a,b,c], [1,2,3] → [a,b,c,1,2,3]
function concatArrays(arr1,arr2){
    return [...arr1, ...arr2];
}
const result = concatArrays(['a','b','c'], [1,2,3]);
console.log(...result);