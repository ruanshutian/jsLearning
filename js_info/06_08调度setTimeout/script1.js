"use strict"


/**
 * 调度：setTimeout 和 setInterval
 *
 * setTimeout 允许我们将函数推迟到一段时间间隔之后再执行。
 * setInterval 允许我们重复运行一个函数，从一段时间间隔之后开始运行，之后以该时间间隔连续重复运行该函数。
 *
 */
/**
 * setTimeout
 */
// function sayHi(){
//     alert("hello");
// }
// setTimeout(sayHi,1000)
// // 错的！
// setTimeout(sayHi(), 1000);

// setTimeout(()=>alert("Hello"),1000)

/**
 * 用 clearTimeout 来取消调度
 */
// let timerId = setTimeout(()=>alert("Hello dd"),2000);
// alert(timerId);
// clearTimeout(timerId);
// alert(timerId);

/**
 * setInterval
 */

// let timeId = setInterval(()=>alert("Hello"),2000);
// setTimeout(()=>{clearInterval(timeId);alert('stop')},5000)

/**
 * 嵌套的 setTimeout
 */
// let timerId = setTimeout(function tick(){
//     alert('tick');
//     timerId = setTimeout(tick,2000);
// },4000
// )

/**
 * 零延时的 setTimeout
 */
setTimeout(()=>alert("Hello"));
alert("World")
















