"use strict"


// // WeakMap

// let weakMap = new WeakMap();
// let obj = {};
// weakMap.set(obj,"ok");
// // weakMap.set("test","whoops");//error,   WeakMap 的键必须是对象，不能是原始值

// let john = {name : "John"};
// let weakMap =new WeakMap();
// weakMap.set(john , "...");
// john = null;

// // 📁 visitsCount.js
// let visitsCountMap = new Map(); // map: user => visits count

// // 递增用户来访次数
// function countUser(user) {
//   let count = visitsCountMap.get(user) || 0;
//   visitsCountMap.set(user, count + 1);
// }
// // 📁 main.js
// let john = { name: "John" };

// countUser(john); // count his visits

// // 不久之后，john 离开了
// john = null;

// // 使用案例：缓存
// // 📁 cache.js
// let cache = new Map();
// // 计算并记住结果
// function process(obj) {
//   if (!cache.has(obj)) {
//     let result = /* calculations of the result for */ obj;
//     cache.set(obj, result);
//   }
//   return cache.get(obj);
// }
// // 现在我们在其它文件中使用 process()
// // 📁 main.js
// let obj = {/* 假设我们有个对象 */};
// let result1 = process(obj); // 计算完成
// // ……稍后，来自代码的另外一个地方……
// let result2 = process(obj); // 取自缓存的被记忆的结果
// // ……稍后，我们不再需要这个对象时：
// obj = null;
// alert(cache.size); // 1（啊！该对象依然在 cache 中，并占据着内存！）

// // 📁 cache.js
// let cache = new WeakMap();
// // 计算并记结果
// function process(obj) {
//   if (!cache.has(obj)) {
//     let result = /* calculate the result for */ obj;
//     cache.set(obj, result);
//   }
//   return cache.get(obj);
// }
// // 📁 main.js
// let obj = {/* some object */};
// let result1 = process(obj);
// let result2 = process(obj);
// // ……稍后，我们不再需要这个对象时：
// obj = null;
// // 无法获取 cache.size，因为它是一个 WeakMap，
// // 要么是 0，或即将变为 0
// // 当 obj 被垃圾回收，缓存的数据也会被清除



// WeakSet
let visitedSet =new WeakSet();
let john = {name :"John"};
let pete = {name :"Pete"};
let mary = {name :"Mary"};

visitedSet.add(john);
visitedSet.add(pete);
visitedSet.add(mary);

alert(visitedSet.has(john));
alert(visitedSet.has(mary));








