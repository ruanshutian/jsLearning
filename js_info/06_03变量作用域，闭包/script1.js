"use strict"
/**
 * 闭包 是指一个函数可以记住其外部变量并可以访问这些变量。在某些编程语言中，这是不可能的，或者应该以一种特殊的方式编写函数来实现。
 * 但如上所述，在 JavaScript 中，所有函数都是天生闭包的（只有一个例外，将在 "new Function" 语法 中讲到）
 */
/**
 * 代码块:如果在代码块 {...} 内声明了一个变量，那么这个变量只在该代码块内可见。
 */
//  {
//     // 显示 message
//     let message = "Hello";
//     alert(message);
//   }
  
//   {
//     // 显示另一个 message
//     let message = "Goodbye";
//     alert(message);
//   }
  
// //嵌套函数
// function sayHiBye(firstName , lastName){
//     function getFullName(){
//         return firstName + " " +lastName;
//     }
//     alert("Hello " + getFullName() );
//     alert("Bye " + getFullName() ); 
// }
// sayHiBye(11,22);



// function f() {
//     let value = Math.random();
  
//     function g() {
//       debugger; // 在 Console 中：输入 alert(value); No such variable!
//     }
  
//     return g;
//   }
  
//   let g = f();
//   g();
//   正如你所见的 —— No such variable! 理论上，它应该是可以访问的，但引擎把它优化掉了。
//   这可能会导致有趣的（如果不是那么耗时的）调试问题。其中之一 —— 我们可以看到的是一个同名的外部变量，而不是预期的变量：
  
//   let value = "Surprise!";
  
//   function f() {
//     let value = "the closest value";
  
//     function g() {
//       debugger; // 在 console 中：输入 alert(value); Surprise!
//     }
  
//     return g;
//   }
  
//   let g = f();
//   g();
  

// // let count =1;
// function makeCounter() {
//     let count = 0;
//     console.log(3333);
//     // return function() {
//     //   return count++;
//     // };
// }
// //   let counter = makeCounter();
// //   let counter2 = makeCounter();
// //   alert( counter() ); // 0
// //   alert( counter() ); // 1
// //   alert( counter() ); // 1
// // alert(makeCounter());
// makeCounter();

// // function test(){
// //     console.log("111");
// //     console.log("111");
// //     return function(){
// //         console.log("22");
// //     }
// // }
// // test();



// function sayWordToSomeOne(peopleName) {
//     const cache = {
//         age: 30
//     }
//     console.log("ssss")
//     return function(word) {
//         console.log(`${word} ${peopleName}, your age is ${cache.age}`)
//     }
// }
// // function simpleFn(word) {
// //     const obj = {
// //         age: 30
// //     }
// //     console.log(`${word}, your age is ${obj.age}`)
// // }
// let myFn = sayWordToSomeOne("ziv");
// // console.log(typeof myFn)
// // console.log(myFn instanceof Object)
// // simpleFn('222"')
// myFn("dsd");
// myFn("hello");
// myFn();
// sayWordToSomeOne("ss");




function getCacheFn() {
    const data = {}

    return function getCacheValue(key) {
        if (data[key]) {
            console.log("get from cache")
            return data[key]
        } else {
            console.log('cache missed');
            data[key] = getValue(key)
        }
        return data[key]
    }
}

function getValue(key) {
    return Math.random();
}

const cacheFn = getCacheFn();

console.log(cacheFn(100));
console.log(cacheFn(100));
console.log(cacheFn(120));

cacheFn(111);
cacheFn(111);
const cacheFn2 = getCacheFn();
cacheFn2(111);