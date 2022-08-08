"use strict"

// //symbol 是带有可选描述的“原始唯一值”。
// // let id =Symbol();
// let id1 =Symbol("id");
// let id2 =Symbol("id");
// alert(id1==id2);
// let id =Symbol("id");
// alert(id.toString());
// alert(id.description);

// //隐藏”属性
// let user ={
//   name:"John"
// };
// let id = Symbol("id");
// user[id]=1;
// alert(user[id]);;
// let id2 = Symbol("id");
// user[id2] = "Their id value";

// // 对象字面量中的 symbol
// let id = Symbol("id");

// let user = {
//   name: "John",
//   [id]: 123 // 而不是 "id"：123
// };

// symbol 在 for…in 中会被跳过

// let id = Symbol("id");
// let user = {
//   name: "John",
//   age: 30,
//   [id]: 123
// };
// for (let key in user) alert(key); // name, age（没有 symbol）
// // 使用 symbol 任务直接访问
// alert("Direct: " + user[id]); // Direct: 123

// let id = Symbol("id");
// let user = {
//   [id]: 123
// };
// let clone = Object.assign({}, user);
// alert( clone[id] ); // 123

// 全局 symbol
// let id =Symbol.for("id");
// let idAgain =Symbol.for("id");
// alert(id == idAgain);

// // 通过 name 获取 symbol
// let sym = Symbol.for("name");
// let sym2 = Symbol.for("id");
// // 通过 symbol 获取 name
// alert( Symbol.keyFor(sym) ); // name
// alert( Symbol.keyFor(sym2) ); // id

// 系统 symbol
alert(Symbol.hasInstance.toString());
/**
 * Symbol.hasInstance
Symbol.isConcatSpreadable
Symbol.iterator
Symbol.toPrimitive

 */
