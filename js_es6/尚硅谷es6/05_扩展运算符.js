/**
 * es6   ...  扩展运算符能将  【数组】  转换为逗号分割的  【参数序列】
 */

// const tfboys = ['aa','bb','cc'];
//
// function fun(){
//     console.log(arguments);
// }
// fun(...tfboys);


/**
 * 扩展运算符的应用
 *
 */

// 数组的合并

// const arr1 = [1,2];
// const arr2 = [3,4];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3)

// 数组的克隆

//  const a1 = ['a','b','c'];
//  const a2 = ['d','e','f'];
//  const a3 = [...a1];
// console.log(a3);

//将伪数组转换为真正的数组

const a = document.querySelectorAll('div');
console.log(a);
const arr = [...a];
console.log(arr);
