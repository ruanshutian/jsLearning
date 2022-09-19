/**
 * es6 允许  => 来定义函数
 */

// let fn = (a,b)=>{
//     return a+b;
// }
//
// let result = fn (2,3);
// console.log(result);

/**
 * 1\this 是静态的，this始终是指向函数声明时所在作用域下的this的值
 */

// function getName(){
//     console.log(this.name);
// }
// let getName2 = ()=>{
//     console.log(this.name);
// }
//
// window.name = "ruan";
// const school = {
//     name :"rst"
// }
//
// getName();
// getName2();
//
// getName.call(school);
// getName2.call(school);

/**
 * 2 、不能作为构造函数的实例化对象
 */

// let Person = (name ,age)=>{
//     this.name = name,
//         this.age =age
// }
// let me = new Person('ss',20);//剪头函数不能作为构造函数的实例化对象===》报错
// console.log(me);

/**
 * 3 、不能使用arguments 变量
 */

// let fn =()=>{
//     console.log(arguments);
// }
// fn(1,2,3);//剪头函数不能使用arguments 变量==》报错


/**
 * 4、剪头函数的简写
 * （1）省略小括号，当形参有且只有一个时候
 * （2）省略花括号，当代码体只有一条语句的时候，此时return必须省略，而且语句的执行结果就是函数的返回值
 */




