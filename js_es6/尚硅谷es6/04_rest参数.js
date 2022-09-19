/**
 * es6  引入rest参数，用于获取函数的实参，用来代替arguments
 * es5获取实参的方式
 */

// function date(){
//     console.log(arguments);
// }
// date("dd",'aa','vv');

//  rest 参数
// function date(...args){
//     console.log(args);
// }
// date("dd",'aa','vv');

//  rest 参数必须放到参数最后

function date(a, b ,...args){
    console.log(a, b)
    console.log(args);
}
date(1,2,3,4,5,6,7,8);
