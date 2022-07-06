//  write a function palindrome this function will return palindrome 
//  if the string is  palindrome   and mot palindrome   if notnote (palindrome 
//     string means any string you can read it from left and right)
function palindrome(str) {

    let length = str.length;
    let pal = Math.floor(length/2);

    for ( let i = 0; i < pal; i++ ) {
        if (str[i] !== str[length - 1 - i]) {
            return ' not palindrome';
        }
    }

    return 'palindrome';
}
console.log (palindrome('yay'));
console.log (palindrome('yaa'));