"use strict"


/**
 * “class” 语法
 */

// class User{
//     constructor(name) {
//         this.name =name;
//     }
//     sayHi(){
//         alert(this.name);
//     }
// }
// let user = new User("rst");
// user.sayHi();

/**
 * 什么是 class？
 */

// class user{
//     constructor(name){
//         this.name = name;
//     }
//     sayHi(){
//         alert(this.name);
//     }
// }
// alert(typeof user);//function

// class user{
//     constructor(name) {
//         this.name = name;
//     }
//     sayHi(){
//     alert(this.name)}
// }
// alert(typeof user);
// alert(user === user.prototype.constructor);
// alert(user.prototype.sayHi);
// alert(Object.getOwnPropertyNames(user.prototype));


/**
 * 不仅仅是语法糖
 */

// // 用纯函数重写 class User
//
// // 1. 创建构造器函数
// function User(name) {
//     this.name = name;
// }
// // 函数的原型（prototype）默认具有 "constructor" 属性，
// // 所以，我们不需要创建它
//
// // 2. 将方法添加到原型
// User.prototype.sayHi = function() {
//     alert(this.name);
// };
//
// // 用法：
// let user = new User("John");
// user.sayHi();

/**
 * 类表达式
 */
// // “命名类表达式（Named Class Expression）”
// // (规范中没有这样的术语，但是它和命名函数表达式类似)
// let User = class MyClass {
//     sayHi() {
//         alert(MyClass); // MyClass 这个名字仅在类内部可见
//     }
// };
//
// new User().sayHi(); // 正常运行，显示 MyClass 中定义的内容
//
// alert(MyClass); // error，MyClass 在外部不可见


/**
 * Getters/setters
 */











