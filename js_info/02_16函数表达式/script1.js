"use strict"

// function sayHi(){
//     alert("Hello");
// }

// let sayHi2 = function sss(){
//     alert("hello sayHi2");
// }

// sayHi()
// // sayHi2();

// // sss();

// alert(sayHi);


// let sayH3 = sayHi;
// sayH3();
// sayHi();


// function ask(question ,yes ,no)
// {
//     if(confirm(question))yes()
//     else no();
// }
// function showOk()
// {
//     alert("you agreed");
// }
// function showCacel()
// {
//     alert("You  canceled the excution");
// }

// ask("Do you agree?",showOk,showCacel);


// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//   );

let age = prompt("age is ?",18);
let welcome;
if(age < 18)
{
    welcome = function(){
        alert("111");
    };
}
else{
    welcome = function(){
        alert("222");
    };
    // welcome();
}

welcome();



