"use strict"

//hint
// let obj ={
//     name :"name",
// };
// alert(obj);
// let anotherObj ={

// };
// anotherObj[obj] = 123;
// alert(anotherObj);

// let user ={
//     name :"John",
//     money:1000,
//     [Symbol.toPrimitive](hint){
//         alert(`hint:${hint}`);
//         return hint=="string"?`{name:"${this.name}"}`:this.money;
//     }
// };
// alert(user);
// alert(+user);
// alert(user+500);

// let user={name :"John"};
// alert(user);
// alert(user. ===user);

let user = {
    name: "John",
    money: 1000,
  
    // 对于 hint="string"
    toString() {
      return `{name: "${this.name}"}`;
    },
  
    // 对于 hint="number" 或 "default"
    valueOf() {
      return this.money;
    }
  
  };
  
  alert(user); // toString -> {name: "John"}
  alert(+user); // valueOf -> 1000
  alert(user + 500); // valueOf -> 1500

