

/**
 * 指定了类型为number，所以赋值为字符串的时候报错
 */

let a : number
a = 10;
a = 20;
// a = "hello"; //指定了类型为number，所以赋值为字符串的时候报错

let b:string;
b= "hello";
/**
 * 声明变量直接进行赋值
 */
// let c:boolean = false;
// c = true;
// c = 123; //

/**
 * 如果变量的声明和赋值是同时进行的，TS可以自动变量进行类型检测
 */
let c = false;

 c = true;

/**
 * js 不考虑参数的类型和个数的
 *
 */

//规定参数类型
// function sum(a:number , b:number ){
//     return a+b;
// }

//规定返回值类型
function sum(a:number , b:number ):number{
    return a+b;
}

console.log(sum(3,4));
