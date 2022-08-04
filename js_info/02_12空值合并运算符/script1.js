"use strict"


/**
 * result = a ?? b，像这样：
result = (a !== null && a !== undefined) ? a : b;
 */

// let user;
// alert(user ?? "匿名");

// let user2 = "John";
// alert(user2 ?? "匿名");

// let firstName = null;
// let secondName =null;
// let nickName= "SuperCoder";

// alert(firstName??secondName??nickName??"匿名");
// alert(firstName || secondName || nickName || "Anonymous"); // Supercoder

/**
 * 它们之间重要的区别是：

|| 返回第一个 真 值。
?? 返回第一个 已定义的 值。
|| 无法区分 false、0、空字符串 "" 和 null/undefined。它们都一样 —— 假值（falsy values）。如果其中任何一个是 || 的第一个参数，那么我们将得到第二个参数作为结果。
 */

//JavaScript 禁止将 ?? 运算符与 && 和 || 运算符一起使用，除非使用括号明确指定了优先级。

let x =(1&&2)??3;//let x =1&&2??3;//报错



