"use strict"

/**
 * 属性标志
 *
 * writable — 如果为 true，则值可以被修改，否则它是只可读的。
 * enumerable — 如果为 true，则会被在循环中列出，否则不会被列出。
 * configurable — 如果为 true，则此属性可以被删除，这些特性也可以被修改，否则不可以。
 */
/**
 * Object.getOwnPropertyDescriptor 方法允许查询有关属性的 完整 信息。
 * @type {{name: string}}
 */
// let user = {
//     name: "John"
// };
// let desciptor = Object.getOwnPropertyDescriptor(user,'name');
// alert(JSON.stringify(desciptor,null,2));

/**
 * 为了修改标志，我们可以使用 Object.defineProperty。
 * @type {{}}
 */
// let user = {};
// // let user = {
// //     name: "John"
// // };
// Object.defineProperty(user, "name", {
//     value: "John"
// });
// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
// alert( JSON.stringify(descriptor, null, 2 ) );

/**
 * 只读
 */
// let user = {
//     name: "John"
// };
// Object.defineProperty(user,"name",{
//     writable:false
// });
// user.name = "ssss";//不可以修改

/**
 * 不可枚举
 */

// let user = {
//     name: "John",
//     toString() {
//         return this.name;
//     }
// };
// // 默认情况下，我们的两个属性都会被列出：
// for (let key in user) alert(key); // name, toString


// let user = {
//     name: "John",
//     toString() {
//         return this.name;
//     }
// };
// Object.defineProperty(user, "toString", {
//     enumerable: false
// });
// // 现在我们的 toString 消失了：
// for (let key in user) alert(key); // name


/**
 * 不可配置
 */
// let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
// alert( JSON.stringify(descriptor, null, 2 ) );
// // Error，因为 configurable: false
// Object.defineProperty(Math, "PI", { writable: true });

/**
 * 有一个方法 Object.defineProperties(obj, descriptors)，允许一次定义多个属性。
 */
Object.defineProperties(user, {
    name: { value: "John", writable: false },
    surname: { value: "Smith", writable: false },
    // ...
});

/**
 * 还有一些限制访问 整个 对象的方法：
 *
 * Object.preventExtensions(obj)
 * 禁止向对象添加新属性。
 * Object.seal(obj)
 * 禁止添加/删除属性。为所有现有的属性设置 configurable: false。
 * Object.freeze(obj)
 * 禁止添加/删除/更改属性。为所有现有的属性设置 configurable: false, writable: false。
 * 还有针对它们的测试：
 *
 * Object.isExtensible(obj)
 * 如果添加属性被禁止，则返回 false，否则返回 true。
 * Object.isSealed(obj)
 * 如果添加/删除属性被禁止，并且所有现有的属性都具有 configurable: false则返回 true。
 * Object.isFrozen(obj)
 * 如果添加/删除/更改属性被禁止，并且所有当前属性都是 configurable: false, writable: false，则返回 true。
 */










