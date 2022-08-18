"use strict"


/**
 * new Function 语法
 *
 * 语法
 */

// let sum =new Function('a','b','return a+b');
// alert(sum(1,2));
//
// let sayHi = new Function('alert("Hello")')
// sayHi();
//
// let str = 'alert("i am server")';
// let func = new Function(str);
// func();

/**
 * 闭包
 */
function getFunc(){
    let value ='test';
    let str = 'alert("value")';
    // let func = new function ('alert("ddd")');
    return func;
}
getFunc()()

// function getFunc(){
//     let value ='test';
//     let func = new function (){
//         alert(value);
//     };
//     return func;
// }
// getFunc()()







