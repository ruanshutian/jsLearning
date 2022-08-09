"use strict"

//// Map
// let map =new Map();
// map.set("1","str");
// map.set(1,"num1");
// map.set(true,"bool1");
// alert(map.get(1));
// alert(map.get("1"));
// alert(map.size);

// // Map 还可以使用对象作为键。//在 Object 中，我们则无法使用对象作为键。
// let john = { name: "John" };
// // 存储每个用户的来访次数
// let visitsCountMap = new Map();
// // john 是 Map 中的键
// visitsCountMap.set(john, 123);
// alert( visitsCountMap.get(john) ); // 123

// Map 迭代
// let recipeMap =new Map([
//     ['cucumber',500],
//     ['tomatoes',350],
//     ['onion',50]    
// ]);

// for(let vegetable of recipeMap.keys()){
//     alert(vegetable);
// }
// for(let amount of recipeMap.values()){
//     alert(amount);
// }
// for(let entry of recipeMap){
//     alert(entry);
// }

// recipeMap.forEach((value ,key ,map)=>{
//         alert(`${key} : ${value}`);
//     }
// );

//// Object.entries：从对象创建 Map

// 键值对 [key, value] 数组
// let map = new Map([
//     ['1',  'str1'],
//     [1,    'num1'],
//     [true, 'bool1']
//   ]);
//   alert( map.get('1') ); // str1

// let obj ={
//     name : "John",
//     ahe :30,
// };

// let map = new Map(Object.entries(obj));
// alert(map.get('name'));


//// Object.fromEntries：从 Map 创建对象

// let prices = Object.fromEntries([
//     ['banana', 1],
//     ['orange', 2],
//     ['meat', 4]
//   ]);
//   // 现在 prices = { banana: 1, orange: 2, meat: 4 }
//   alert(prices.orange); // 2

// let map =new Map();
// map.set('banana',1);
// map.set('orange',2);
// map.set('meat',4);
// // let obj =Object.fromEntries(map.entries());
// let obj =Object.fromEntries(map);
// alert(obj.orange);

// Set
// let set = new Set();
// let john = {name :"John"};
// let pete = {name :"Pete"};
// let mary = {name : "Mary"};

// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);

// alert(set.size);
// for(let user of set){
//     alert(user.name);
// }

// Set 迭代（iteration）

let set =new Set(['oranges','apples','bananas']);
// for(let vlaue of set)alert(vlaue);

set.forEach((value, valueAgain , set)=>{
    alert(value);
}
);












