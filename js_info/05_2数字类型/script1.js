"use strict"

// let billion = 1_000_000_000;
// alert(billion);
// let billion = 1e9;  // 10 亿，字面意思：数字 1 后面跟 9 个 0
// alert( 7.3e9 );  // 73 亿（与 7300000000 和 7_300_000_000 相同）

// let mcs =0.00001;
// alert(mcs);
// mcs =1e-6;
// alert(mcs);

// alert(0xff);
// alert(0xFF);
// alert(0XFF);
// let a = 0b11111111; // 二进制形式的 255
// let b = 0o377; // 八进制形式的 255
// alert( a == b );

//toString()
// let num = 255;
// alert( num.toString(16) );  // ff
// alert( num.toString(2) ); 
// alert( num.toString(32) ); 

// alert(123456..toString(36));

// alert(1e500);
// alert(0.1+0.2==0.3);

// alert(0.1.toFixed(20));


/**
 * 测试：isFinite 和 isNaN
 * Infinity（和 -Infinity）是一个特殊的数值，比任何数值都大（小）。
NaN 代表一个 error。
 */

// alert(isNaN(NaN));
// alert(isNaN("Str"));
// alert(NaN==NaN);

// alert(isFinite(15));
// alert( isFinite("str") ); // false，因为是一个特殊的值：NaN
// alert( isFinite(Infinity) ); // false，因为是一个特殊的值：Infinity

// let num =+prompt("Enter a number",'');
// alert(isFinite(num));

// parseInt 和 parseFloat
// alert( parseInt('100px') ); // 100
// alert( parseFloat('12.5em') ); // 12.5
// alert( parseInt('12.3') ); // 12，只有整数部分被返回了
// alert( parseFloat('12.3.4') ); // 12.3，在第二个点出停止了读取

// alert( parseInt('a123') );//Nan

// alert( parseInt('0xff', 16) ); // 255
// alert( parseInt('ff', 16) ); // 255，没有 0x 仍然有效
// alert( parseInt('2n9c', 36) ); // 123456


alert(Math.random());
alert(Math.max(3,5,-10,0,1,22));
alert(Math.min(1,2,3,4));

alert(Math.pow(2,10));


