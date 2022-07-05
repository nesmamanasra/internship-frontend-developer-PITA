//Rewrite if..else using multiple ternary operators '?'.
//For readability, it’s recommended to split the code into multiple lines.
let login = 'Employee';
let message = (login == 'Employee') ? 'Hello' : 
             (login == 'Director') ?  'Greetings' :
             (login == '')? 'No login': '';
console.log(message);
