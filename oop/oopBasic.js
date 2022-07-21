//JavaScript OOP
//What Is OOP ?
//OOP Stand For => Object Oriented Programming
// OOP Is A Paradigm or Style Of Code
// OOP Use The Concept Of Object To Design A Computer Program
// Its Not New => Simula Is The First OOP Programming Language At 1960
// Some Languages Support OOP and Some Not
// Object Is A Package Contains Properties and Functions That Work Together To Produce Something in Your Application. 
// Functions Here Called Methods

//Why We Use OOP ?
// You Will be Able to Create a Large and Complex Software Architecture in Organized Ways.
// You Will be Able To Hide Certain Parts Of Code in Your Object With Encapsulation To Prevent Mess With The Code.
// You Will Be Able To Create Reusable Objects To Use in Your Application Easily With Inheritance.

// simple example

class User {
    id;
    name;
    salary;
    
    constructor(id, name, salary){
      this.id = id;
      this.name = name;
      this.salary = salary;
    }
   
  }
  let userOne = new User(101,'nesma',2000);
  let userTwo = new User(102,'nesma',4000);
  let userThree = new User(103,'nesma',6000);
  
  console.log(userOne);
  console.log(userTwo);
  console.log(userThree);



  // simple function

  function addUser(id,name,salary){
  this.id = id;
  this.name = name;
  this.salary = salary + 1000;
}

let userOne1 = new addUser(101,'nesma',2000);
let userTwo2 = new addUser(102,'nesma',4000);
let userThree3 = new addUser(103,'nesma',6000);

console.log(userOne1);
console.log(userTwo2);
console.log(userThree3);