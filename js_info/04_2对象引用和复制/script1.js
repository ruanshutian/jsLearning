"use strict"

//对象引用和复制
// let user ={name :"John"};
// let admin = user;//复制引用
// admin.name ="Pete";
// alert(user.name);

// 通过引用来比较
// let a={};
// let b=a;
// alert(a ==b);
// alert(a ===b);
////true

// let a={};
// let b ={};
// alert(a==b);
////false

//克隆与合并，Object.assign
// let user={
//     name :"John",
//     age:30,
// };

// let clone ={};
// for(let key in user){
//     clone[key] =user[key];
// }
// clone.name="ppp";
// alert(user.name);

// let user = { name: "John" };
// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };
// let permissions3 = { name: "nameccc" };//如果被拷贝的属性的属性名已经存在，那么它会被覆盖
// // 将 permissions1 和 permissions2 中的所有属性都拷贝到 user 中
// Object.assign(user, permissions1, permissions2,permissions3);
// // 现在 user = { name: "nameccc", canView: true, canEdit: true }

// let user = {
//     name:"John",
//     age:30,
// };
// let clone =Object.assign({},user);

//深层克隆
let user ={
    name :"John",
    sizes:{
        height:182,
        width :50
    }
};
// alert(user.sizes.height);
let clone = Object.assign({}, user);
var deep = _.cloneDeep(user);
// alert( user.sizes === clone.sizes ); 
user.sizes.width++;
alert(user.sizes.width);
alert(clone.sizes.width);
alert(deep.sizes.width);