//Write a function that return the sum of the arguments, number of arguments is undefined, could be 1 or more
function sum() {
    let num =0;
    for( const element of arguments){
      num = num + element;
    }
      console.log(num);
  }
  sum(1,2,3);