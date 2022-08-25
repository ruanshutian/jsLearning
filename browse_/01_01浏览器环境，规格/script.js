

/**
 * 有一个叫做 window 的“根”对象。它有两个角色：
 *
 * 首先，它是 JavaScript 代码的全局对象，如 全局对象 一章所述。
 * 其次，它代表“浏览器窗口”，并提供了控制它的方法。
 */

// function sayHi(){
//     alert("Hello");
// }
//
//
// window.sayHi()
//
// console.log(window.innerHeight,window.innerWidth);


/**
 * 文档对象模型（DOM）
 * https://dom.spec.whatwg.org/
 */

// document.body.style.background = "red";
// setTimeout(()=>document.body.style.background = "",1000);


/**
 * 浏览器对象模型（BOM）
 */

console.log(location.href);
if(confirm("Go to Wikipedia?")){
    location.href = "https://www.baidu.com";
}







