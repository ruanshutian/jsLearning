"use strict"


// Rest 参数 ...

// function sum(a,b){
//     return a+b;
// }
// alert(sum(1,2,3,4,5))

// function sumAll(...args){
//     let sum =0;
//     for(let arg of args){
//         sum +=arg;
//     }
//     return sum;
// }
// alert(sumAll(1,2,3));
// alert(sumAll(1,2));
// alert(sumAll(1));


// function showName(firstName , lastName ,...titles){
//     alert(firstName + " "+ lastName);
//     alert(titles[0]);
//     alert(titles[1]);
//     alert(titles.length);
// }
// showName("111","222","333","444");



// “arguments” 变量
// function showName(){
//     alert(arguments.length );
//     alert(arguments[0]);
//     alert(arguments[1]);
// }
// showName("111","22");
// showName("111111");

// 箭头函数没有 "arguments"
// function f(){
//     let showArg = ()=>alert(arguments[0]);
//     showArg();
// }
// f(1);

// Spread 语法
// alert(Math.max(3,5,1));
// let arr = [3,5,1];
// alert(Math.max(...arr));

// let arr1 =[1,-2,3,4];
// let arr2 =[8,3,-8,1];
// alert(Math.max(...arr1, ...arr2));

// let str = "Hello";
// alert( [...str] ); // H,e,l,l,o


// // 复制 array/object
// let arr = [1,2,3];
// let arrCopy = [...arr];
// alert(JSON.stringify(arr) === JSON.stringify(arrCopy));
// alert(arr == arrCopy);
// arr.push(4);
// alert(arr);
// alert(arrCopy);








