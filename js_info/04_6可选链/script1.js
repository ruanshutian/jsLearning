"use strict"

// //不存在属性的问题
// let user={};
// // alert(user.address.street);
// // alert(user.address?user.address.street:undefined);
// //更优雅
// alert( user.address && user.address.street && user.address.street.name ); // undefined（不报错）


// // 可选链
// let user ={};
// alert(user?.address?.street );

// // 短路效应
// let user =null;
// let x =0;
// user?.sayHi(x++);
// alert(x);

// //其它变体：?.()，?.[]
// let userAdmin ={
//   admin(){
//     alert("I am admin");
//   }
// };
// let userGuest ={};
// userAdmin.admin?.();
// userGuest.admin?.();

let key ="firstName";
let user1={
  firstName:"John"
};
let user2=null;
alert(user1?.[key]);
alert(user2?.[key]);

delete user?.name;

/**
 * 我们可以使用 ?. 来安全地读取或删除，但不能写入
可选链 ?. 不能用在赋值语句的左侧。
 */