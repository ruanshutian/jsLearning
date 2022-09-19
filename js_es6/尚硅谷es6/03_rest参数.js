/**
 * es6 允许  给函数参数赋值初始值
 */

/**
 *
 * 1、行参初始值
 *  一般默认值的参数位置靠后
 */
function add(a,b,c =10){
    return a+b+c;
}

/**
 * 2、与解构赋值结合
 *
 */

function  connect({host ="127.0.0.1" , username ,password ,port}){
    console.log(host);
    console.log(username);
    console.log(password);
    console.log(port);
}
connect({
    host:"www.baidu.com",
    username:'root',
    password:'root',
    port:3306
})

