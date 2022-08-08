"use strict"

//构造函数
//它们的命名以大写字母开头。
// 它们只能由 "new" 操作符来执行。

// function User(name) {
//   // this = {};（隐式创建）

//   // 添加属性到 this
//   this.name = name;
//   this.isAdmin = false;

//   // return this;（隐式返回）
// }

// function User(name){
//   this.name =name;
//   this.isAdmin=false;
// }
// let user = new User("Jack");
// alert(user.name);
// alert(user.isAdmin);

// function User(){
//   alert(new.target);
// }
// User();
// new User();

// function User(name) {
//   if (!new.target) { // 如果你没有通过 new 运行我
//     return new User(name); // ……我会给你添加 new
//   }

//   this.name = name;
// }
// let john = User("John"); // 将调用重定向到新用户
// alert(john.name); // John


//return
// function BigUser(){
//   this.name = "John";
//   return {name :"Godzilla"};
// }
// alert(new BigUser().name);

// function SmallUser(){
//   this.name = "John";
//   return;
// }
// alert(new SmallUser().name);

// 构造器中的方法
function User(name){
  this.name = name;
  this.sayHi=function(){
    alert("My name is "+this.name);
  };
}
let John =new User("John");
John.sayHi();




