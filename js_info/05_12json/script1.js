"use strict"




/**
 * JavaScript 提供了如下方法：
JSON.stringify 将对象转换为 JSON。
JSON.parse 将 JSON 转换回对象。
 */

// let student ={
//     name :'John',
//     age :30,
//     isAdmin:false,
//     courses :['html','css','js'],
//     spouse :null
// };
// let json = JSON.stringify(student);
// alert( typeof json);
// alert(json);


/**
 * // 一些特定于 JavaScript 的对象属性会被 JSON.stringify 跳过
函数属性（方法）。
Symbol 类型的键和值。
存储 undefined 的属性。
 */
// let user = {
//     sayHi() { // 被忽略
//       alert("Hello");
//     },
//     [Symbol("id")]: 123, // 被忽略
//     something: undefined // 被忽略
// };
// alert( JSON.stringify(user) ); // {}（空对象）


// // 不得有循环引用。
// let room = {
//     number: 23
//   };
//   let meetup = {
//     title: "Conference",
//     participants: ["john", "ann"]
//   };
//   meetup.place = room;       // meetup 引用了 room
//   room.occupiedBy = meetup; // room 引用了 meetup
//   JSON.stringify(meetup); // Error: Converting circular structure to JSON

// 排除和转换：replacer

// let meetup = {
//     title: "Conference",
//     participants: [{name: "John"}, {name: "Alice"}],
//     place: "room" 
//   };
//   alert( JSON.stringify(meetup, ['title', 'participants']) );

//   let room = {
//     number: 23
//   };
//   let meetup = {
//     title: "Conference",
//     participants: [{name: "John"}, {name: "Alice"}],
//     place: room // meetup 引用了 room
//   };
//   room.occupiedBy = meetup; // room 引用了 meetup
//   alert( JSON.stringify(meetup, ['title', 'participants','place','name','number']) );
 // // {"title":"Conference","participants":[{},{}]}


//  格式化：space//这里的 space = 2 告诉 JavaScript 在多行中显示嵌套的对象，对象内部缩进 2 个空格：

// let user = {
//     name: "John",
//     age: 25,
//     roles: {
//       isAdmin: false,
//       isEditor: true
//     }
//   };
//   alert(JSON.stringify(user,null,2));

// 自定义 “toJSON”

// let room = {
//     number: 23,
//     // toJSON() {
//     //   return this.number;
//     // }
//   };
// alert( JSON.stringify(room) );

// let room = {
//     number: 23,
//     toJSON() {
//       return this.number;
//     }
//   };
// alert( JSON.stringify(room) ); // 23



// JSON.parse

// let numbers = "[0, 1, 2, 3]";
// numbers = JSON.parse(numbers);
// alert(numbers[1]);

// let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
// let user = JSON.parse(userData);
// alert( user.friends[1] );


// // 使用 reviver
// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
// // let meetup = JSON.parse(str);
// let meetup = JSON.parse(str,function(key , value){
//     if(key == 'date')return new Date(value);
//     return value;
// });
// alert( meetup.date.getDate() ); // Error!

// let schedule = `{
//     "meetups": [
//       {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
//       {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
//     ]
//   }`;
//   schedule = JSON.parse(schedule, function(key, value) {
//     if (key == 'date') return new Date(value);
//     return value;
//   });
//   alert( schedule.meetups[1].date.getDate() ); // 正常运行了！

//
// let user = {
//     name: "John Smith",
//     age: 35
//   };
// // let usrJson = JSON.stringify(user);
// // alert(usrJson);
// // let userStr = JSON.parse(usrJson,function(key ,value){
// //     // if(key == 'age')return new Number(value);
// //     // return value;
// // });
// let userStr = JSON.parse(JSON.stringify(user));
// alert(userStr);

let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
  };
  
  // 循环引用
  room.occupiedBy = meetup;
  meetup.self = meetup;
  
  alert( JSON.stringify(meetup, function replacer(key, value) {
    /* your code */
    // alert(key);
    console.log(typeof key);
    console.log(key.length);
    return (key != "" && value == meetup) ? undefined : value;
  }));
  
  /* 结果应该是：
  {
    "title":"Conference",
    "occupiedBy":[{"name":"John"},{"name":"Alice"}],
    "place":{"number":23}
  }
  */












