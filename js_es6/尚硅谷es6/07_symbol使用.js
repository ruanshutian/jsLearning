

/**
 * Symbol 使用
 */

 // 向对象中添加方法  up down

// let game ={
//     name:"rst",
//     up :function (){
//         console.log("up");
//     },
//     down:function (){
//         console.log('down');
//     }
//
// };
//
// let method = {
//     up:Symbol(),
//     down:Symbol()
// }
//
// game[method.up] = function (){
//     console.log("11");
// }
// game[method.down] = function (){
//     console.log("22");
// }
//
// console.log(game)

//
// let youxi = {
//     name :"wzry",
//     [Symbol("say")] :function (){
//         console.log("say");
//     },
//     [Symbol("hello")]:function (){
//     console.log("hello");
//     }
// };
// console.log(youxi)

/**
 * Symbol 的内置值（Symbol属性）
 */

// class Person {
//     static [Symbol.hasInstance](param){
//         console.log(param);
//         return false;
//     }
// }
// let o ={};
// console.log(o instanceof  Person);

//
const a1 = [1,2,3];
const a2 = [4,5,6];

a2[Symbol.isConcatSpreadable] = false;
// a2[Symbol.isConcatSpreadable] = true;
console.log(a1.concat(a2));

