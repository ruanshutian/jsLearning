"use strict"


/**
 * 在 JavaScript 中有 7 种原始类型：string，number，bigint，boolean，symbol，null 和 undefined。
 */


// //关于对象的最好的事儿之一是，我们可以把一个函数作为对象的属性存储到对象中。
// let john = {
//   name: "John",
//   sayHi: function() {
//     alert("Hi buddy!");
//   }
// };
// john.sayHi(); // Hi buddy!

// let str="Hello";
// alert(str.toUpperCase());
// let n =1.234567;
// alert(n.toFixed(3));

alert(typeof 0);
alert(typeof new Number(0));
let str = "Hello";
str.test = 5;
alert(str.test);
//这个例子清楚地表明，原始类型不是对象。它们不能存储额外的数据。

