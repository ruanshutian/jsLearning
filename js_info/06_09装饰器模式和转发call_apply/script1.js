"use strict"

/**
 * 装饰器模式和转发，call/apply
 *
 */

/**
 * 透明缓存
 */

// function slow(x){
//     alert(`Called with ${x}`);
//     return x;
// }
// function cachingDecorator(func){
//     let cache = new Map();
//     return function (x) {
//         if (cache.has(x)) {
//             return cache.get(x);
//         }
//         let result = func(x);
//         cache.set(x, result);
//         return result;
//     }
// }
// slow = cachingDecorator(slow);
// alert(slow(1));
// alert("Again " +slow(1));

/**
 * 使用 “func.call” 设定上下文
 */
// let worker = {
//     someMethod(){
//         return 1;
//     },
//     slow(x){
//         alert("Catch with " + x) ;
//         return x*this.someMethod();
//     }
// };
// function cachingDecorator(func){
//     let cache =new Map();
//     return function (x){
//         if(cache.has(x)){
//             return cache.get(x);
//         }
//         let result =func(x);
//         cache.set(x,result);
//         return result;
//     };
// }
// // alert(worker.slow(1));
// // worker.slow = cachingDecorator(worker.slow);
// // alert(worker.slow(2))

// let worker = {
//     someMethod(){
//         return 1;
//     },
//     slow(x){
//         alert("Catch with " + x) ;
//         return x*this.someMethod();
//     }
// };
// function cachingDecorator(func){
//     let cache =new Map();
//     return function (x){
//         if(cache.has(x)){
//             return cache.get(x);
//         }
//         let result =func.call(this,x);
//         cache.set(x,result);
//         return result;
//     };
// }
// // alert(worker.slow(1));
// worker.slow = cachingDecorator(worker.slow);
// alert(worker.slow(2))

/**
 *
 * 传递多个参数
 */


// let worker = {
//     slow(min, max) {
//         alert(`Called with ${min},${max}`);
//         return min + max;
//     }
// };
//
// function cachingDecorator(func, hash) {
//     let cache = new Map();
//     return function() {
//         let key = hash(arguments); // (*)
//         if (cache.has(key)) {
//             return cache.get(key);
//         }
//
//         let result = func.call(this, ...arguments); // (**)
//
//         cache.set(key, result);
//         return result;
//     };
// }
//
// function hash(args) {
//     return args[0] + ',' + args[1];
// }
//
// worker.slow = cachingDecorator(worker.slow, hash);
//
// alert( worker.slow(3, 5) ); // works
// alert( "Again " + worker.slow(3, 5) ); // same (cached)

/**
 * func.apply
 *
 * call 和 apply 之间唯一的语法区别是，call 期望一个参数列表，而 apply 期望一个包含这些参数的类数组对象。
 * func.call(context, ...args);
 * func.apply(context, args);
 */





















