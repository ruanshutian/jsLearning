"use strict"

/**
 * Object.prototype
 */
// let obj = {};
// alert(obj);
//
// alert(obj.__proto__ === Object.prototype );
// alert(obj.toString() === obj.__proto__.toString());
// alert(obj.toString() === Object.prototype.toString());

/**
 * 其他内建原型
 */

// let arr = [1, 2, 3];
//
// // 它继承自 Array.prototype？
// alert( arr.__proto__ === Array.prototype ); // true
//
// // 接下来继承自 Object.prototype？
// alert( arr.__proto__.__proto__ === Object.prototype ); // true
//
// // 原型链的顶端为 null。
// alert( arr.__proto__.__proto__.__proto__ ); // null

/**
 * 基本数据类型
 */
// console.log(String.prototype)
// console.log(Number.prototype)
// console.log(Boolean.prototype)

/**
 * 更改原生原型
 */

// String.prototype.show = function (){
//     alert(this);
// };
// "BOOM".show();


/**
 * 从原型中借用
 */

let parent = {
    son :"dd",
}
let obj = {
    0: "Hello",
    1: "world!",
    length: 2,
    __proto__:parent,
};
obj.join = Array.prototype.join;
alert( obj.join(',') ); // Hello,world!
alert(obj.son);










