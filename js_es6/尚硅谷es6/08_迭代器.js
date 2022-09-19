

/**
 * 迭代器
 */

 const xiyou = ["aron","孙悟空","唐僧","猪八戒","沙僧"];

 for(let v of xiyou){
     console.log(v);
 }


/**
 * 迭代器工作原理 ：
 * 创建一个指针对象，指向当前数据解构的起始位置
 * 第一次调用对象的next方法，指针自动指向数据结构的第一个成员
 * 接下来不断调用next方法，指针一直往后移动，直到指向最后一个成员
 * 每调用next方法返回一个包含value和done属性的对象
 */
let iterator =  xiyou[Symbol.iterator]();
console.log(iterator);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());







