"use strict"

/**
 * 使用 obj.__proto__ 设置或读取原型被认为已经过时且不推荐使用（deprecated）了（已经被移至 JavaScript 规范的附录 B，意味着仅适用于浏览器）。
 *
 * 现代的获取/设置原形的方法有：
 *
 * Object.getPrototypeOf(obj) —— 返回对象 obj 的 [[Prototype]]。
 * Object.setPrototypeOf(obj, proto) —— 将对象 obj 的 [[Prototype]] 设置为 proto。
 * __proto__ 不被反对的唯一的用法是在创建新对象时，将其用作属性：{ __proto__: ... }。
 * Object.create(proto, [descriptors]) —— 利用给定的 proto 作为 [[Prototype]] 和可选的属性描述来创建一个空对象。
 */

// let animal ={
//     eats :true,
// }
// // let rabbit =Object.create(animal);
// // alert(rabbit.eats);
// // alert(Object.getPrototypeOf(rabbit) === animal);
// // Object.setPrototypeOf(rabbit,{});
// // alert(Object.getPrototypeOf(rabbit) === animal);
//
// let rabbit =Object.create(animal,{
//     jumps:{
//         value:true
//     }
// });
// alert(rabbit.jumps);


/**
 * "Very plain" objects
 */











