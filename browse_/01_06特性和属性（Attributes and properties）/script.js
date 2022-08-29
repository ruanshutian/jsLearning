

/**
 * DOM 属性
 */

// document.body.myData = {
//     name: 'Caesar',
//     title: 'Imperator'
// };

// alert(document.body.myData.title); // Imperator
// document.body.sayTagName = function (){
//     alert(this.tagName);
// }
// document.body.sayTagName();

// Element.prototype.sayHi = function (){
//     alert(`Hello,I'm ${this.tagName}`);
// }
// document.documentElement.sayHi();
// document.body.sayHi();


/**
 * HTML 特性
 */

// alert(document.body.id); // test
// alert(document.body.something); // undefined


// alert(input.type); // text
// alert(body.type); // undefined：DOM 属性没有被创建，因为它不是一个标准的特性


/**
 * 属性—特性同步
 */

// let input = document.querySelector('input');
// input.setAttribute('id','id');
// console.log(input.id);
// input.id = "newId";
// console.log(input.getAttribute('id'));

// let input = document.querySelector('input');
// input.setAttribute('value','text');
// console.log(input.value);
//
// input.value = 'newValue';
// console.log(input.getAttribute('value'));


/**
 * DOM 属性是多类型的
 */
// console.log(input.getAttribute('checked'));
// console.log(input.checked);
//
// console.log(div.getAttribute('style'));
// console.log(div.style);
// console.log(div.style.color);
//
// console.log(a.getAttribute('href'));
// console.log(a.href);

/**
 * 非标准的特性，dataset
 * 所有以 “data-” 开头的特性均被保留供程序员使用。它们可在 dataset 属性中使用。
 */

// let user = {
//     name :"Pete",
//     age:25
// };
// for(let div of document.querySelectorAll('show-info')){
//     let field = div.getAttribute('show-info');
//     div.innerHTML = user[field];
// }

// console.log(document.body.dataset.about);

// console.log(order.dataset.orderState);
//
// order.dataset.orderState = "canceled";



