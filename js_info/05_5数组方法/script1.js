"use strict"

/**
 * 添加/移除数组元素
我们已经学了从数组的首端或尾端添加和删除元素的方法：
arr.push(...items) —— 从尾端添加元素，
arr.pop() —— 从尾端提取元素，
arr.shift() —— 从首端提取元素，
arr.unshift(...items) —— 从首端添加元素。
 */

// splice
// let arr = ["I","go","home"];
// delete arr[1];
// alert(arr[1]);
// alert(arr);
// alert(arr.length);

// let arr = ["I","go","home"];
// arr.splice(1,1);
// alert(arr);

// let arr = ["I","go","home"];
// arr.splice(0,2,"11","22");
// alert(arr);

// let arr = ["I", "study", "JavaScript", "right", "now"];
// let removed = arr.splice(0,2);
// alert(removed);

// let arr = ["I", "study", "JavaScript", "right", "now"];
// arr.splice(2,0,"2222","333");
// alert(arr);

// let arr =[1,2,5];
// arr.splice(-0,0,3,4);
// alert(arr);


// // slice
// let arr =["t","e","s","t"];
// alert(arr.slice(1,3));
// alert(arr.slice(-2));
// alert(arr.slice());

// // concat
// let arr =[1,2];
// alert(arr.concat([3,4]));
// alert(arr.concat([3,4],[5,6]));
// alert(arr.concat([3,4],5,6));

// let arr =[1,2];
// let arrayLike ={
//     0:"something",
//     length:1
// };
// alert(arr.concat(arrayLike));
// 如果类数组对象具有 Symbol.isConcatSpreadable 属性，那么它就会被 concat 当作一个数组
// let arr =[1,2];
// let arrayLike ={
//     0:"something",
//     1:"else",
//     [Symbol.isConcatSpreadable]:true,
//     length:2,

// };
// alert(arr.concat(arrayLike));


// 遍历：forEach
// ["ss","s2","s3"].forEach(alert);
// 对每个元素调用 alert
["Bilbo", "Gandalf", "Nazgul"].forEach(printItem)
function printItem(item) {
  console.log('pi', item); 
}

// 在数组中搜索
// let arr = [1, 0, false];
// alert(arr.indexOf(0));
// alert(arr.indexOf(false));
// alert(arr.includes(1));


// const arr = [NaN];
// alert( arr.indexOf(NaN) ); // -1（错，应该为 0）
// alert( arr.includes(NaN) );// true（正确）
// // 这是因为 includes 是在比较晚的时候才被添加到 JavaScript 中的，并且在内部使用了更新了的比较算法。


// find 和 findIndex/findLastIndex
// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"},
//     {id: 4, name: "John"}
//   ];
//   let use =users.find(item=>item.id =1);
//   alert(use.name);
//   alert(users.findIndex(user=>user.name="John"));
//   alert(users.findLastIndex(user=>user.name="John"));

// filter
// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"}
//   ];
//   let somrUsers = users.filter(item=>item.id<3);
//   alert(somrUsers.length);

// 转换数组
// // map
// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
// alert(lengths); // 5,7,6

// let arr = [ 1, 2, 15 ];
// // arr.sort();
// // alert(arr);

// //按数字排序
// function sortForNumber(a,b){
//     if(a>b)return 1;
//     if(a==b)return 0;
//     if(a<b)return -1;
// }
// arr.sort(sortForNumber);
// alert(arr);

// [1, -2, 15, 2, 0, 8].sort(function(a, b) {
//     alert( a + " <> " + b );
//     return a - b;
//   });

// let arr=[1,2,15];
// arr.sort(function(a,b){
//     return a-b;
// });
// alert(arr)

// // reverse
// let arr = [1, 2, 3, 4, 5];
// arr.reverse();
// alert(arr);

// split 和 join

// let names = 'Bilbo, Gandalf, Nazgul';
// let arr=names.split(',');
// alert(arr);
// for(let name of arr){
//     alert(`A message to ${name}. `);
// }

// let names = 'Bilbo, Gandalf, Nazgul';
// let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);
// alert(arr); // Bilbo, Gandalf

// let str="test";
// alert(str.split(''));

// let arr = ['Bilbo', 'Gandalf', 'Nazgul'];
// let str = arr.join(';'); // 使用分号 ; 将数组粘合成字符串
// alert( str ); // Bilbo;Gandalf;Nazgul


// let arr = [1, 2, 3, 4, 5];
// let result = arr.reduce((sum, current) => sum + current, 0);
// alert(result); // 15



// // Array.isArray
// alert(Array.isArray({})); // false
// alert(Array.isArray([])); // true


// 大多数方法都支持 “thisArg”
/**
 * arr.find(func, thisArg);
arr.filter(func, thisArg);
arr.map(func, thisArg);
// ...
// thisArg 是可选的最后一个参数
 */
// let army = {
//     minAge: 18,
//     maxAge: 27,
//     canJoin(user) {
//       return user.age >= this.minAge && user.age < this.maxAge;
//     }
//   };
  
//   let users = [
//     {age: 16},
//     {age: 20},
//     {age: 23},
//     {age: 30}
//   ];
  
//   // 找到 army.canJoin 返回 true 的 user
//   let soldiers = users.filter(army.canJoin, army);
  
//   alert(soldiers.length); // 2
//   alert(soldiers[0].age); // 20
//   alert(soldiers[1].age); // 23







