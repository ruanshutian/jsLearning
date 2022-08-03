"use strict"

// 当你使用 开发者控制台 运行代码时，请注意它默认是不启动 use strict 的。

// let message;
// message = "hello";
// alert(message)

// let message ="Hello";
// alert(message);

// let user ="John",age =25,message = "hello";

// let user = 'John';
// let age = 25;
// let message = 'Hello';

// let user = 'John',
//   age = 25,
//   message = 'Hello';

// let user = 'John'
//   , age = 25
//   , message = 'Hello';

// var message = "Hello";
// message = "2222";
// alert(message)

// let hello = "Hello world";
// let message;
// message = hello;
// alert(hello);
// alert(message);

// let message = "This";
// // let message = "That";

//命名——
// 变量名称必须仅包含字母、数字、符号 $ 和 _。
// 首字符必须非数字。
//注意：区分大小写；允许非英文字母但是不推荐

// let userName;
// let test123;

// let $ =1;
// let _ =2;
// alert($ +_);

// let 1a;//不能以数字开始
// let my-name;//不能允许“-”

//  name =5;//"use strict"限制
//  alert(name);

//常量
const myBirthday = "18.04.1982";
// myBirthday = "01.01.1999";//const不能被修改
alert(myBirthday);

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ……当我们需要选择一个颜色
let color = COLOR_ORANGE;
alert(color); // #FF7F00
