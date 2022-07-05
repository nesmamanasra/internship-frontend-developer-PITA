//Write a pattern that matches e-mail addresses using RegEx 
// The personal information part contains the following ASCII characters.
// Uppercase (A-Z) and lowercase (a-z) English letters.
// Digits (0-9).
// Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
// Character . ( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other


function valid_email(str)
{
let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    if(mailformat.test(str))
    {  
        return true;
    }  
    return false;
}

console.log(valid_email('_nesmazak1999@gmail.com'));
//You have entered an invalid email address!
