


/**
 * 样式和类
 *
 * className 和 classList
 */


// console.log(document.body.className); // main page
//
// document.body.classList.add('article');
// console.log(document.body.className);
//
// for(let name of document.body.classList){
//     console.log(name);
// }

/**
 * 元素样式
 */
// document.body.style.backgroundColor = prompt('backgreound color?','green');

/**
 * 重置样式属性
 */

// document.body.style.display ='none';
// setTimeout(() => document.body.style.display = "", 1000); // 恢复正常

// document.body.style.background = 'red';
// setTimeout(()=>document.body.style.removeProperty('background'),1000);
//
// div.style.cssText=`color: red !important;
//     background-color: yellow;
//     width: 100px;
//     text-align: center;
//   `;
//
// console.log(div.style.cssText);

/**
 * 注意单位
 */

// document.body.style.margin = '20px';
// console.log(document.body.style.margin);
// console.log(document.body.style.marginTop);
// console.log(document.body.style.marginLeft);


/**
 * 计算样式：getComputedStyle
 */
let computeStyle = getComputedStyle(document.body);
console.log(computeStyle.marginTop);
console.log(computeStyle.color);










