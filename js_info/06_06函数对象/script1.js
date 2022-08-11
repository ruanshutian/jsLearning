"use strict"


/**
 * 把函数想象成可被调用的“行为对象（action object）”
 * 
 * 属性 “name”
 */

// function sayHi(){
//   alert("Hi");
// }
// alert(sayHi.name);

// let sayHi2 = function(){
//   alert("Hi");
// }
// alert(sayHi2.name);

// function f(sayHi3 = function(){}){
//   alert(sayHi3.name);
// }
// f();

// let user = {
//   sayHi(){

//   },
//   sayBye:function(){

//   }
// }
// alert(user.sayHi.name);
// alert(user.sayBye.name);


/**
 * 属性 “length”
 */
// function f0(){}
// function f1(a){}
// function f2(a,b){}
// function many(a,b,...more){}
// alert(f0.length)
// alert(f1.length);
// alert(f2.length)
// alert(many.length)


function ask(question, ...handlers) {
  let isYes = confirm(question);
  for(let handler of handlers) {
    if (handler.length == 0) {
      if (isYes) handler();
    } else {
      handler(isYes);
    }
  }
}
// 对于肯定的回答，两个 handler 都会被调用
// 对于否定的回答，只有第二个 handler 被调用
ask("Question?", () => alert('You said yes'), result => alert(result));





