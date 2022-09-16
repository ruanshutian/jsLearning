/**
 * https://es6.ruanyifeng.com/#docs/let
 */

/**
 * 总结：
 * let:
 * var:
 * const:
 *
 */




/**
 * let 1只在命令所在的代码卡内有效;2不存在变量提升;3let不允许在相同作用域内，重复声明同一个变量。
 * var
 */

// var a =[];
// for(var  i=0;i<10;i++){
//     a[i] = function (){
//         console.log(i);
//     }
// }
// a[6]();

// let a =[];
// for(let  i=0;i<10;i++){
//     a[i] = function (){
//         console.log(i);
//     }
// }
// a[6]();

    //for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。
// for (let i = 0; i < 3; i++) {
//     let i = 'abc';
//     console.log(i);
// }

    //let 不存在变量提升
// console.log(foo); // 输出undefined
// var foo = 2;
//
// // console.log(bar); // 报错ReferenceError
// let bar = 2;

    //暂时性死区
// var tmp = 123;
// if (true) {
//     // tmp = 'abc'; // ReferenceError
//     let tmp;
// }
// /**
//  * ES6 明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。
//  *
//  * 总之，在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。
//  */
//
// if (true) {
//     // TDZ开始
//     // tmp = 'abc'; // ReferenceError
//     // console.log(tmp); // ReferenceError
//
//     let tmp; // TDZ结束
//     console.log(tmp); // undefined
//
//     tmp = 123;
//     console.log(tmp); // 123
// }

    //不允许重复声明

/**
 * 2 块级作用域
 */
    //第一种场景，内层变量可能会覆盖外层变量。
// var tmp = new Date();
// function f() {
//     console.log(tmp);
//     // if (false) {
//     //     var tmp = 'hello world';
//     // }
//     var tmp ;
// }
// f(); // undefined

    //第二种场景，用来计数的循环变量泄露为全局变量。
// var s = 'hello';
// for (var i = 0; i < s.length; i++) {
//     console.log(s[i]);
// }
// console.log(i); //

    // 浏览器的 ES6 环境
// function f() { console.log('I am outside!'); }
// (function () {
//     // var f = undefined;
//     if (true) {
//         function f() { console.log('I am inside!'); }
//     }
//
//     f();
// }());
// f()
// Uncaught TypeError: f is not a function

/**
 * const 命令
 */


/**
 * 4、顶层对象的属性
 */
// var a=1;
// console.log(window.a);
// let b=2;
// // console.log(window.b);//error

/**
 * 5\globalThis 对象
 */
// let test_v = 1;
// console.log(this)

// 方法一
// (typeof window !== 'undefined'
//     ? window
//     : (typeof process === 'object' &&
//         typeof require === 'function' &&
//         typeof global === 'object')
//         ? global
//         : this);


// 方法二
// var getGlobal = function () {
//     if (typeof self !== 'undefined') { return self; }
//     if (typeof window !== 'undefined') { return window; }
//     if (typeof global !== 'undefined') { return global; }
//     throw new Error('unable to locate global object');
// };
// console.log(getGlobal())
