"use strict"

// let user ={
//   name :"John",
//   age:30,
//   sayHi(){
//     alert(this.name);
//     // alert(user.name);
//   }
// }
// user.sayHi();
// let admin =user;
// user=null;
// admin.sayHi();

// let user ={name:"John"};
// let admin ={name:"Admin"};
// function sayHi(){
//   alert(this.name);
// }
// user.f=sayHi;
// admin.f=sayHi;
// user.f();
// admin.f();
// admin['f']();

// function sayHi(){
//   alert(this);
// }
// sayHi();


// function makeUser() {
//   return {
//     name: "John",
//     ref: this
//   };
// }
// function makeUser(){
//   return{
//     name:"John",
//     ref(){
//       return this;
//     }
//   }
// }
// let user = makeUser();
// alert( user.ref().name ); 


// let calculator = {
//   a:0,
//   b:0,
//   // ……你的代码……
//   read(){
//     this.a=prompt("a?",0);
//     this.b=prompt("b?",0);
//   },
//   sum(){
//     return this.a+this.b;
//   },
//   mul(){
//     return this.a*this.b;
//   }
// };
// calculator.read(1,2);
// alert( calculator.sum() );
// alert( calculator.mul() );

let ladder ={
  step:0,
  up(){
    this.step++;
    return this;
  },
  down(){
    this.step--;
    return this;
  },
  showStep:function(){
    alert(this.step);
    return this;
  }
};
ladder.up().up().down().showStep().down().showStep(); // 展示 1，然后 0

