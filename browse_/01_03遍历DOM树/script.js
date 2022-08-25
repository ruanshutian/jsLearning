


/**
 * 在最顶层：documentElement 和 body
 */


// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

/**
 * 子节点：childNodes，firstChild，lastChild
 */

// for(let i=0;i<document.body.childNodes.length;i++){
//     console.log(document.body.childNodes[i]);
// }
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);


/**
 * DOM 集合
 *
 * 我们可以使用 for..of 来迭代它：
 */
for(let node of document.body.childNodes){
    // console.log(node);
}
/**
 * 无法使用数组的方法，因为它不是一个数组：
 */

// console.log(document.body.childNodes.filter);//wrong
// console.log(Array.from(document.body.childNodes).filter);
// alert(Array.from(document.body.childNodes).filter);

/**
 * 兄弟节点和父节点
 */

// console.log(document.body.parentNode === document.documentElement);
// console.log(document.head.nextSibling);
// console.log(document.body.previousSibling);


/**
 * 纯元素导航
 */
for(let elem of document.body.children){
    // console.log(elem);
}

/**
 * 更多链接：表格
 */
// let table1 = document.getElementById("table")
let td =table.rows[0].cells[1];
console.log(td);
td.style.backgroundColor = "red";













