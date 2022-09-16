/**
 *
 */

    // es5
// function Point(x, y){
//     this.x = x;
//     this.y = y;
// }
// Point.prototype.toString = function (){
//     return '(' +this.x +',' +this.y + ')';
// };
// var p = new Point(1, 2);
// console.log(p.toString())

    // es6
// class Point{
//     constructor(x, y){
//         this.x = x;
//         this.y = y;
//     }
//     toString(){
//         return '(' +this.x +',' +this.y + ')';
//     }
// }
// let p = new Point(2, 3);
// console.log(p.toString())
// console.log(typeof  Point);
// console.log(Point ===Point.prototype.constructor);
//
// Object.assign(Point.prototype,{
//     toValue(){
//         console.log('toValue');
//     }
// })
//
// p.toValue()

    // 2 constructor() 方法
/**
 * constructor 一般是默认添加的
 */

    // 类的实例对象
// class Point {
//     // ...
// }
// // 报错
// // var point = Point(2, 3);
// // 正确
// var point = new Point(2, 3);

/**
 * 4  实例属性的新写法
 */

/**
 * 5 取值函数（getter）和存值函数（setter）
 */

// class MyClass {
//     constructor() {
//         // ...
//     }
//     get prop() {
//         return 'getter';
//     }
//     set prop(value) {
//         console.log('setter: '+value);
//     }
// }
// let inst = new MyClass();
// inst.prop = 123;
// // setter: 123
// console.log(inst.prop)
// // 'getter'

// class CustomHTMLElement {
//     constructor(element) {
//         this.element = element;
//     }
//
//     get html() {
//         return this.element.innerHTML;
//     }
//
//     set html(value) {
//         this.element.innerHTML = value;
//     }
// }
//
// var descriptor = Object.getOwnPropertyDescriptor(
//     CustomHTMLElement.prototype, "html"
// );
//
// console.log("get" in descriptor ) // true
// console.log("set" in descriptor)  // true

/**
 * 6、属性表达式
 */

// let methodName = "getArea";
// class Square{
//     constructor(length) {
//     }
//     [methodName](){
//
//     }
// }
// let s = new Square();
// console.log([methodName]);


/**
 * 7、class表达式
 */







