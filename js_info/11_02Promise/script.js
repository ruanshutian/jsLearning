
// "use strict"

/**
 * Promise
 *
 * “生产者代码（producing code）”会做一些事儿，并且会需要一些时间。例如，通过网络加载数据的代码。它就像一位“歌手”。
 * “消费者代码（consuming code）”想要在“生产者代码”完成工作的第一时间就能获得其工作成果。许多函数可能都需要这个结果。这些就是“粉丝”。
 * Promise 是将“生产者代码”和“消费者代码”连接在一起的一个特殊的 JavaScript 对象。用我们的类比来说：这就是就像是“订阅列表”。“生产者代码”
 * 花费它所需的任意长度时间来产出所承诺的结果，而 “promise” 将在它（译注：指的是“生产者代码”，也就是下文所说的 executor）准备好时，将结果向所有订阅了的代码开放
 *
 */



// let promise = new Promise(function(resolve, reject) {
//     // 当 promise 被构造完成时，自动执行此函数
//
//     // 1 秒后发出工作已经被完成的信号，并带有结果 "done"
//     setTimeout(() => resolve("done"), 1000);
// });

// console.log(promise);

// let promise = new Promise(function(resolve, reject) {
//     // 1 秒后发出工作已经被完成的信号，并带有 error
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
// });


/**
 * 消费者：then，catch
 *
 * // promise.then(
 * //     function (result){
 * //         alert('result');
 * //     },
 * //     function (error){
 * //         alert("error");
 * //     }
 * // );
 */


// let promise = new Promise(function (resolve,reject){
//    setTimeout(()=>resolve("done"),1000);
//
// });
// promise.then(
//     result => alert(result),
//     error =>alert(error)
// );

// let promise = new Promise(function (resolve,reject){
//     setTimeout(()=>resolve("done"),1000);
// });
// // promise.then(
// //     result=>alert(result),
// //     error=>alert(error)
// // )
// promise.then(alert);

/**
 * catch
 */

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
// });
//
// // .catch(f) 与 promise.then(null, f) 一样
// promise.catch(alert); // 1 秒后显示 "Error: Whoops!"

/**
 * finally
 */

// new Promise((resolve, reject)=>{
//     setTimeout(()=>resolve("value"),2000)
// })
//     .finally(()=>alert('Promise ready'))
//     .then(result =>alert(result));
//
//
// new Promise((resolve, reject)=>{
//     throw new Error("error");
// })
//     .finally(()=>alert("Promise ready"))
//     .catch(err=>alert("error"))


/**
 * 示例：loadScript
 */

function loadScript(src) {
    return new Promise(function(resolve, reject) {
        let script = document.createElement('script');
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Script load error for ${src}`));

        document.head.append(script);
    });
}
let promise = loadScript("script1.js");

promise.then(
    script => alert(`${script.src} is loaded!`),
    error => alert(`Error: ${error.message}`)
);

promise.then(
    // script => alert('Another handler...'),
    script => sayHi()
);
promise.finally(
    // script=>sayHi(),
    script=>sayHi()
)




