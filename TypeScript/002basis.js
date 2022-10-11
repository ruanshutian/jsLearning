/**
 * 指定了类型为number，所以赋值为字符串的时候报错
 */
var a;
a = 10;
a = 20;
// a = "hello"; //指定了类型为number，所以赋值为字符串的时候报错
var b;
b = "hello";
/**
 * 声明变量直接进行赋值
 */
// let c:boolean = false;
// c = true;
// c = 123; //
/**
 * 如果变量的声明和赋值是同时进行的，TS可以自动变量进行类型检测
 */
var c = false;
c = true;
function sum(a, b) {
    return a + b;
}
console.log(sum(3, 4));
