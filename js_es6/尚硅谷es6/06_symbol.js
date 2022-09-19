/**
 * es6   symbol 新的原始数据类型Symbol  表示独一无二的值
 */

// 创建symbol

let s =Symbol();
let s2 =Symbol("sss");
let s3 =Symbol('sss');

console.log(s2,typeof s);

console.log(s===s2);
console.log(s2===s3);

let s4 = Symbol.for('s4');
let s5 = Symbol.for('s5');
let s6 = Symbol.for('s4');
console.log(s4 === s5)
console.log(s4 === s6)

// symbol不能运算



