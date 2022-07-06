//1 -- write a function that will return fuzz if the number can be 
// divided into 3,  buzz if the number can be divided into 5, fuzz buzz if the 
// number can be divided into 5 and 3,. return any text if no cases from the 
// previous 3 cases are true

let n = 3 ; 
 let printWords =  (n % 3 == 0  && n % 5 == 0  ) ?'fuzz buzz': 
                  (n % 3 == 0 ) ?'fuzz ':
                   (n % 5 == 0 ) ?'buzz ' :'error';
                 
console.log(printWords); 