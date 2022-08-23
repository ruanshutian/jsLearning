"use strict"

/**
 *
 * 原型继承：在 JavaScript 中，对象有一个特殊的隐藏属性 [[Prototype]]（如规范中所命名的），它要么为 null，要么就是对另一个对象的引用。该对象被称为“原型”：
 * [[Prototype]]
 * 这里只有两个限制：
 *
 * 引用不能形成闭环。如果我们试图在一个闭环中分配 __proto__，JavaScript 会抛出错误。
 * __proto__ 的值可以是对象，也可以是 null。而其他的类型都会被忽略。
 */

// let animal ={
//     eats:true,
//     walk(){
//         alert("Animal walk");
//     }
// };
// let rabbit = {
//     jumps:true,
//     __proto__:animal,
// };
// rabbit.__proto__ =animal;
// // alert(rabbit.eats);
// // alert(rabbit.jumps);
// // rabbit.walk();
//
// let longEar ={
//     __proto__:rabbit,
//     earLength:10,
// }
// // longEar.walk();
//
// /**
//  * 写入不使用原型
//  */
// rabbit.walk= function (){
//     alert("rabbit.walk" )
// }
// rabbit.walk();


// let user = {
//     name: "John",
//     surname: "Smith",
//
//     set fullName(value) {
//         [this.name, this.surname] = value.split(" ");
//     },
//
//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     }
// };
// let admin = {
//     __proto__:user,
//     isAdmin:true
// };
// alert(admin.fullName);
// admin.fullName = "ssss eeeee";
// alert(admin.fullName);

/**
 * “this” 的值
 */

// // animal 有一些方法
// let animal = {
//     walk() {
//         if (!this.isSleeping) {
//             alert(`I walk`);
//         }
//     },
//     sleep() {
//         this.isSleeping = true;
//     }
// };
//
// let rabbit = {
//     name: "White Rabbit",
//     __proto__: animal
// };
//
// // 修改 rabbit.isSleeping
// rabbit.sleep();
//
// alert(rabbit.isSleeping); // true
// alert(animal.isSleeping); // undefined（原型中没有此属性）

/**
 * for…in 循环
 */

let animal = {
    eats: true
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

// Object.keys 只返回自己的 key
alert(Object.keys(rabbit)); // jumps

// for..in 会遍历自己以及继承的键
for(let prop in rabbit) alert(prop); // jumps，然后是 eats

let animal = {
    eats: true
};

let rabbit = {
    jumps: true,
    __proto__: animal
};
/**
 * hasOwnProperty
 */
for(let prop in rabbit) {
    let isOwn = rabbit.hasOwnProperty(prop);

    if (isOwn) {
        alert(`Our: ${prop}`); // Our: jumps
    } else {
        alert(`Inherited: ${prop}`); // Inherited: eats
    }
}

