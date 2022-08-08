"use strict"

// //``引号
// function sum(a, b) {
//     return a + b;
//   }
//   alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.


//特殊字符  https://zh.javascript.info/string

//string 访问
// alert(`My\n`.length);
// let str =`Hello`;
// alert(str[0]);
// alert(str.charAt(0));
// alert(str[str.length-1]);

// alert(str[1000]);
// alert(str.charAt(100));

// for(let char of "Hello"){
//     alert(char);
// }

// // 字符串是不可变的
// let str = "Hi";
// // str[0]='h';//error
// str = 'h'+str[1];
// alert(str);

// alert(`Interface`.toUpperCase());
// alert(`Interface`.toLowerCase());
// alert(`Interface`[0].toLowerCase());

// let str = "Widget with id";
// alert(str.indexOf("Widget"));
// alert(str.indexOf("widget"));
// alert(str.indexOf("id"));

// alert(str.indexOf('id',2));

// let str = 'As sly as a fox, as strong as an ox';
// let target ="as";
// // let pos =0;
// // while(true){
// //     let foundPos = str.indexOf(target,pos);
// //     if(foundPos ==-1)break;
// //     alert(`Found at ${foundPos}`);
// //     pos = foundPos+1;
// // }
// let pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) != -1) {
//   alert( pos );
// }

// let str = "Widget with id";
// if(str.indexOf("Widget")!=-1){
//     alert("We found it");
// }


//
// alert( ~2 ); // -3，和 -(2+1) 相同
// // 0...0000010     
// // 1...1111101
// alert( ~1 ); // -2，和 -(1+1) 相同
// alert( ~0 ); // -1，和 -(0+1) 相同
// alert( ~-1 ); // 0，和 -(-1+1) 相同

//includes    startsWith    endsWith
// alert( "Widget with id".includes("Widget") ); // true
// alert( "Hello".includes("Bye") ); // false
// alert( "Widget".includes("id") ); // true
// alert( "Widget".includes("id", 3) ); // false, 从位置 3 开始没有 "id"
// alert( "Widget".startsWith("Wid") ); // true，"Widget" 以 "Wid" 开始
// alert( "Widget".endsWith("get") ); // true，"Widget" 以 "get" 结束

//  slice
// let str = "stringify";
// alert(str.slice(0,5));
// alert(str.slice(0,1));

// alert(str.slice(2));

// alert(str.slice(-4,-1));
/**
 * str.substring(start [, end])
返回字符串从 start 到（但不包括）end 的部分。这与 slice 几乎相同，但它允许 start 大于 end。
 */
// // 这些对于 substring 是相同的
// alert( str.substring(2, 6) ); // "ring"
// alert( str.substring(6, 2) ); // "ring"
// // ……但对 slice 是不同的：
// alert( str.slice(2, 6) ); // "ring"（一样）
// alert( str.slice(6, 2) ); // ""（空字符串）

// alert(str.substr(2,4));
// alert(str.substr(-4,2));

// str.codePointAt(pos)
// // 不同的字母有不同的代码
// alert( "z".codePointAt(0) ); // 122
// alert( "Z".codePointAt(0) ); // 90

// // String.fromCodePoint(code)
// // 通过数字 code 创建字符
// alert( String.fromCodePoint(90) ); // Z// 在十六进制系统中 90 为 5a
// alert( '\u005a' ); // Z

// let str = '';

// for (let i = 65; i <= 220; i++) {
//   str += String.fromCodePoint(i);
// }
// alert( str );


// 正确的比较
// alert( 'Österreich'.localeCompare('Zealand') ); // -1


alert( '𝒳'.length ); // 2，大写数学符号 X
alert( '😂'.length ); // 2，笑哭表情
alert( '𩷶'.length ); // 2，罕见的中国象形文字

alert( '𝒳'[0] ); // 奇怪的符号……
alert( '𝒳'[1] ); // ……代理对的一块
