"use strict"

//object
// let user = new Object();//构造函数” 的语法
// let user ={};//字面量  语法

// let user = {
//     name:"John",
//     age:30
// };
// alert(user.name);
// alert(user.age);
// user.isAdim = true;
// delete user.age;

// let user ={
//     name :"John",
//     age :30,
//     "likes birds":true,
// };

//方括号
// alert(user["likes birds"]);
// user["likes birds"] = false;
// alert(user["likes birds"]);
// delete user["likes birds"];

// let key = "like birds";
// user[key] = true;
// alert(user[key]);
// alert(user["likes birds"]);


// let key = prompt(" user ==","name");
// alert(user[key]);

// let fruit = prompt("whitch fruit to buy ?","apple");
// let bag = {
//     [fruit]:5,
// };
// alert(bag.apple);

// let bag={};
// bag[fruit] =5;
// alert(bag.apple);

// let fruit = "apple";
// let bag ={
//     [fruit+'Computers']:5,
// };

// alert(bag.appleComputers);



//属性值简写

// function makeUser(name,age){
//     return{
//         name :name,
//         age :age,
//     }
// }
// function makeUser(name, age) {
//     return {
//       name, // 与 name: name 相同
//       age,  // 与 age: age 相同
//       // ...
//     };
//   }
// let user = makeUser("John",30);
// alert(user.name);

// let user = {
//     name,  // 与 name:name 相同
//     age: 30
//   };
// alert(user.name);

//属性名称限制
// let obj ={
//     for:1,
//     let :2,
//     return :3,
// };
// alert(obj.for + obj.let + obj.return);

// let obj ={
//     0:"test",
// }
// alert(obj["0"]);
// alert(obj[0]);


// let obj = {};
// obj.__proto__ = 5; // 分配一个数字
// alert(obj.__proto__); // [object Object] —— 值为对象，与预期结果不同

//属性存在性测试，“in” 操作符

// let user = {};
// alert(user.noSuchProperty === undefined);

// let user ={
//     name :"John",
//     age :30
// };
// // alert("age" in user);
// // alert("blabla" in user);
// // let key ="age";
// // alert(key in user);

// for(let key in user){
//     alert(key);
// }

//想对象一样排序
//“有特别的顺序”：整数属性会被进行排序，其他属性则按照创建的顺序显示
//如果属性名不是整数，那它们就按照创建时的顺序来排序
// let codes ={
//     "49":"Germany",
//     "41":"Switzerland",
//     "44":"Great Britan",
//     "1":"USA",
// }
// for( let code in codes){
//     alert(code);
// }

// let codes ={
//     "+49":"Germany",
//     "41":"Switzerland",
//     "4.4":"Great Britan",
//     "1":"USA",
// }
// for( let code in codes){
//     alert(code);
// }

// alert( String(Math.trunc(Number("49"))) ); // "49"，相同，整数属性
// alert( String(Math.trunc(Number("+49"))) ); // "49"，不同于 "+49" ⇒ 不是整数属性
// alert( String(Math.trunc(Number("1.2"))) ); // "1"，不同于 "1.2" ⇒ 不是整数属性




//练习
// user={};
// user.ss=1;
// alert(user.ss);
let user ={

};
user.name = "John";
user.surname = "Smith";
user.name ="Pete";
delete user.name;

let schdule ={};
// let isEmpty =(schdule)=>{
//     for(let key in schdule)
//     {
//         return true;
//     }
//     return false;
// };

// let isEmpty=function (schdule){
//     for(let key in schdule)
//     {
//         return true;
//     }
//     return false;
// };

// alert(isEmpty(schdule));
// schdule["8:30"]="get up";
// alert(isEmpty(schdule));

// function isEmpty(schdule){
//     for(let key in schdule)
//     {
//         return true;
//     }
//     return false;
// }


// let salaries = {
//     John:100,
//     Ann:160,
//     Pete:130,
// };
// let sum =0;
// function s(salaries){
//     for( let key in salaries)
//     {
//         sum+=salaries[key];
//     }
//     return sum;
// }
// // s(salaries);
// alert(s(salaries));



// 在调用之前
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
multiplyNumeric(menu);
function multiplyNumeric(menu){
    for(let key in menu){
        let type = typeof menu[key];
        if(type =="number"){
            menu[key]*=2;
        }
    }
}
alert(menu.width);
alert(menu.height);
alert(menu.title);
