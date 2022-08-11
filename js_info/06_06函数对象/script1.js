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


// function ask(question, ...handlers) {
//   let isYes = confirm(question);
//   console.log(isYes)
//   for(let handler of handlers) {
//     if (handler.length == 0) {
//       if (isYes) handler();
//     } else {
//       handler(isYes);
//     }
//   }
// }
// // 对于肯定的回答，两个 handler 都会被调用
// // 对于否定的回答，只有第二个 handler 被调用
// ask("Question?", () => alert('You said yes'), result => alert(result));


/**
 * 自定义属性
 */

// function sayHi(){
//   alert("Hi");
//   sayHi.counter++;
// }
// sayHi.counter =0 ;
// sayHi();
// sayHi();
// alert(`Called ${sayHi.counter} times `)

// function makeCounter(){
//   function counter(){
//     return counter.count++;
//   };
//   counter.count = 0;
//   return counter;
// }
// let counter = makeCounter();
// alert(counter());
// alert(counter());

// function makeCounter(){
//   let c=0;
//   return function(){
//     return c++;
//   }
// }
// let f = makeCounter();
// alert(f());
// alert(f())

// function makeCounter() {

//   function counter() {
//     return counter.count++;
//   };

//   counter.count = 0;

//   return counter;
// }
// let counter = makeCounter();
// counter.count = 10;
// alert( counter() ); // 10

/**命名函数表达式 */

// let sayHi = function(who){
//   alert(`Hello , ${who} `);
// }

// let sayHi = function func(who) {
//   alert(`Hello, ${who}`);
// };
// sayHi("John"); // Hello, John


//关于名字 func 有两个特殊的地方，这就是添加它的原因：
// 它允许函数在内部引用自己。
// 它在函数外是不可见的


// let sayHi = function func(who) {
//   if (who) {
//     alert(`Hello, ${who}`);
//   } else {
//     func("Guest"); // 使用 func 再次调用函数自身
//   }
// };
// sayHi(); // Hello, Guest
// // 但这不工作：
// // func(); // Error, func is not defined（在函数外不可见）


// let sayHi = function(who) {
//   if (who) {
//     alert(`Hello, ${who}`);
//   } else {
//     sayHi("Guest"); // Error: sayHi is not a function
//   }
// };

// let welcome = sayHi;
// // sayHi = null;
// welcome(); // Error，嵌套调用 sayHi 不再有效！


let sayHi = function func(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    func("Guest"); // 现在一切正常
  }
};

let welcome = sayHi;
sayHi = null;

welcome(); // Hello, Guest（嵌套调用有效）
