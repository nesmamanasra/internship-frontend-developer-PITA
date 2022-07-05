//Write a JavaScript program to count number of words in string.
// - Remove white-space from start and end position.
// - Convert 2 or more spaces to 1.
// - Exclude newline with a start spacing.
function countWrd(str){
    return str.split(/[\s,\t,\n]+/).join(' ').trim().split(" ").length;
}
console.log(countWrd('hi my    name   nesma'));
console.log(countWrd('hi my    name   nesma'));
console.log(countWrd('hi my    name   nesma'));