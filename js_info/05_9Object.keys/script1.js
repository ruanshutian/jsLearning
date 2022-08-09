"use strict"


// let user = {
//     name: "John",
//     age: 30
//   };
//   for(let value of Object.values(user)){
//     alert(value);
//   }

// let userMap =new Map();
// userMap.set("name","John");
// userMap.set("age",30);
// for(let value of userMap.keys()){
//     alert(value);
// }

// 转换对象
let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};
let doublePrices = Object.fromEntries(
    Object.entries(prices).map(entry => [entry[0],entry[1]*2])
    
);

alert(doublePrices.meat);

