"use strict"


/**
 * 扩展 Error
 */
// class ValidationError extends Error {
//     constructor(message) {
//         super(message); // (1)
//         this.name = "ValidationError"; // (2)
//     }
// }
//
// function test() {
//     throw new ValidationError("Whoops!");
// }
//
// try {
//     test();
// } catch(err) {
//     alert(err.message); // Whoops!
//     alert(err.name); // ValidationError
//     alert(err.stack); // 一个嵌套调用的列表，每个调用都有对应的行号
// }


// class ValidationError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "ValidationError";
//     }
// }
//
// // 用法
// function readUser(json) {
//     let user = JSON.parse(json);
//
//     if (!user.age) {
//         throw new ValidationError("No field: age");
//     }
//     if (!user.name) {
//         throw new ValidationError("No field: name");
//     }
//
//     return user;
// }
//
// // try..catch 的工作示例
//
// try {
//     let user = readUser('{ "age": 25 }');
// } catch (err) {
//     if (err instanceof ValidationError) {
//         alert("Invalid data: " + err.message); // Invalid data: No field: name
//     } else if (err instanceof SyntaxError) { // (*)
//         alert("JSON Syntax Error: " + err.message);
//     } else {
//         throw err; // 未知的 error，再次抛出 (**)
//     }
// }

/**
 * 深入继承
 */



/**
 * 包装异常
 */




