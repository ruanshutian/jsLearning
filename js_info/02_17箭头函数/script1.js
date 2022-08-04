"use strict"
// //剪头函数
// let func = (a,b)=>a+b;
// alert(func(1,2));


// //如果我们只有一个参数，还可以省略掉参数外的圆括号
// let double = n =>n+2;
// alert(double(3));

// //如果没有参数，括号则是空的（但括号必须保留）
// let sayHi=()=>alert("Hello");
// sayHi();

// // 箭头函数可以像函数表达式一样使用。
// let age =prompt("age is ?",18);
// alert(age);
// let welcome = (age <18 )?
// ()=>alert("Hello"):
// ()=>alert("Greetings");

// welcome();

// 多行的箭头函数


let sum =(a,b)=>{
    let result = a+b;
    return result;
}

alert(sum(2,3));
