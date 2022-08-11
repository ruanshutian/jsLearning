"use strict"


// alert("Hello");
// window.alert("Hello1");


// var gVar = 5;
// alert(window.gVar); // 5（成为了全局对象的属性）

// let gLet = 5;
// alert(window.gLet); // undefined（不会成为全局对象的属性）


// window.currenUser = {
//   name:"John",
// }
// alert(currenUser.name);
// alert(window.currenUser.name);

/**
 * 使用 polyfills
 */
if(!window.Promise){
  alert(" Your browser is too old!");
}



