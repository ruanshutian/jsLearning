"use strict"

// Symbol.iterator

// let range ={
//     from:1,
//     to:5,
// }

// range[Symbol.iterator] =function(){
//     return{
//         current:this.from,
//         last:this.to,

//         next(){
//             if(this.current<=this.last){
//                 return {done :false,value:this.current++};
//             }else{
//                 return{done:true};
//             }
//         }
//     };
// }

// // 现在它可以运行了！
// for (let num of range) {
//     alert(num); // 1, 然后是 2, 3, 4, 5
//   }

let range ={
    from:1,
    to:5,
    [Symbol.iterator](){
        this.current =this .from;
        return this;
    },
    next(){
        if(this.current<=this.to){
            return{done:false,value:this.current++};
        }else{
            return{done:true};
        }
    }
};
// for(let num of range){
//     alert(num);
// }

// 字符串是可迭代的
// for (let char of "test") {
//     // 触发 4 次，每个字符一次
//     alert( char ); // t, then e, then s, then t
//   }
//   let str = '𝒳😂';
//   for (let char of str) {
//       alert( char ); // 𝒳，然后是 😂
//   }

// // 显式调用迭代器
// let str="Hello";
// let iterator =str[Symbol.iterator]();
// while(true){
//     let result = iterator.next();
//     if(result.done)break;
//     alert(result.value);
// }



// 可迭代（iterable）和类数组（array-like）
// Array.from

// let arrayLike = { // 有索引和 length 属性 => 类数组对象
//     0: "Hello",
//     1: "World",
//     length: 2
// };
// let arr =Array.from(arrayLike);
// alert(arr);

// let arr =Array.from(range);
// alert(arr);

let arr =Array.from(range,num => num*num);
alert(arr);


