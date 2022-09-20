

/**
 *  数值扩展
 */

//0
// console.log(Number.EPSILON)//2.220446049250313e-16
// function equal(a,b){
//     if(Math.abs(a-b)<Number.EPSILON){
//         return true;
//     }else {
//         return false;
//     }
// }
// console.log(equal(0.1+0.2,0.3))
// console.log(0.1+0.2 == 0.3)

//1 二进制和八进制
// let b = 0b1010;
// let o =0o777;
// let d =100;
// let x = 0xff;
// console.log(b);
// console.log(o);
// console.log(d);
// console.log(x);

//2 检测一个数值是否为有限数
// Number.isFinite()
// console.log(Number.isFinite(100));
// console.log(Number.isFinite(100/0));
// console.log(Number.isFinite(Infinity));

//3 检测一个数值是否为NaN
// Number.isNaN()
console.log(Number.isNaN(123));

//字符串转int
console.log(Number.parseInt('223r42dsds'));
console.log(Number.parseFloat('3.453dsada'));

//判断一个数是否为整数
console.log(Number.isInteger(5));
console.log(Number.isInteger(5.5));

//将数字的小数抹掉
console.log(Math.trunc(3.5));

// 判断一个数到底为 +  0   -
console.log(Math.sign(100));
console.log(Math.sign(0));
console.log(Math.sign(-100));
