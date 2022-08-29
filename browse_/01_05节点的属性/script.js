

// console.log(document.body.constructor.name);
// console.log(document.body);

/**
 * 我们还可以使用 instanceof 来检查继承：
 */
// console.log(document.body instanceof HTMLBodyElement );
// console.log(document.body instanceof HTMLElement);
// console.log(document.body instanceof Element);
// console.log(document.body instanceof Node);
// console.log(document instanceof EventTarget);


/**
 * console.log(elem) 显示元素的 DOM 树。
 * console.dir(elem) 将元素显示为 DOM 对象，非常适合探索其属性。
 *
 * 在规范中，DOM 类不是使用 JavaScript 来描述的，而是一种特殊的 接口描述语言（Interface description language），简写为 IDL，它通常很容易理解。
 */

// interface HTMLInputElement :HTMLElement{
//
// }

/**
 * “nodeType” 属性
 */

// let elem =document.body;
// console.log(elem.nodeType);
// console.log(elem.firstChild.nodeType);
// console.log(document.nodeType);

/**
 * 标签：nodeName 和 tagName
 */

// console.log(document.body.nodeName);
// console.log(document.body.tagName);

/**
 * innerHTML：内容
 */

// console.log(document.body.innerHTML);
// document.body.innerHTML = 'dddddd';
// console.log(document.body.innerHTML);
// document.body.innerHTML = '<b>test'; // 忘记闭合标签
// console.log( document.body.innerHTML ); // <b>test</b>（被修复了）

/**
 * 小心：“innerHTML+=” 会进行完全重写
 */
// document.body.innerHTML+='sssssss';
// console.log(document.body.innerHTML);
// // my-form.innerHTML+="daaaaaaa";


/**
 * outerHTML：元素的完整 HTML
 */
// console.log(elem.outerHTML);
//
// elem.innerHTML+="sssss";
//
// let div = document.querySelector('div');
// div.outerHTML = '<p>A new element</p>';
// console.log(div.outerHTML);
// console.log(div.innerHTML);

/**
 * nodeValue/data：文本节点内容
 */

// let text = document.body.firstChild;
// console.log(text.data);
// let comment = text.nextSibling;
// console.log(comment);

/**
 * textContent：纯文本
 */
// console.log(document.body.textContent);
// let name = prompt("what is your name?","<b>Winnie-the-Pooh</b>")
// elem1.innerHTML =name;
// elem2.textContent = name;


/**
 * “hidden” 属性
 * “hidden” 特性（attribute）和 DOM 属性（property）指定元素是否可见
 */

// elem.hidden =true;
// setInterval(()=>elem.hidden = !elem.hidden,1000);

/**
 * 更多属性
 */
console.log(elem.type);
console.log(elem.id);
console.log(elem.value);




















