"use strict"


// 数组解构
// let arr = ["John","Smith"];
// let [firstName ,surname] =arr;
// alert(firstName);
// alert(surname);

// let [firstName , surname] = "John Amith".split(' ');
// alert(firstName );
// alert( surname);

// 不需要第二个元素
// let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// alert(title);

// let [a, b, c] = "abc"; // ["a", "b", "c"]
// let [one, two, three] = new Set([1, 2, 3]);
// alert(one);
// alert(two);
// alert(three);

// let user = {};
// [user.name, user.surname] = "John Smith".split(' ');
// alert(user.name); // John
// alert(user.surname); // Smith


// 其余的 ‘…’
// let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// alert(name1); // Julius
// alert(name2); // Caesar

// let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// // rest 是包含从第三项开始的其余数组项的数组
// alert(rest[0]); // Consul
// alert(rest[1]); // of the Roman Republic
// alert(rest.length); // 2

// 默认值
// let [firstName, surname] = [];
// alert(firstName); // undefined
// alert(surname); // undefined

// // 默认值
// let [name = "Guest", surname = "Anonymous"] = ["Julius"];
// alert(name);    // Julius（来自数组的值）
// alert(surname); // Anonymous（默认值被使用了）

// let [name = prompt('name'),surname = prompt("surname ?" )] = ["Julius"];
// alert(name);
// alert(surname);

// // 对象解构
// let options = {
//     title: "Menu",
//     width: 100,
//     height: 200
//   };
//   let {title, width, height} = options;
//   alert(title);  // Menu
//   alert(width);  // 100
//   alert(height); // 200

// let options = {
//     title :"Menu",
//     width :100,
//     height :200
// };
// let{width:w , height :h ,title }=options;
// alert(title );
// alert(w);
// alert(h);

// let options = {
//     title: "Menu"
//   };  
//   let {width = 100, height = 200, title} = options;
//   alert(title);  // Menu
//   alert(width);  // 100
//   alert(height); // 200

// let options = {
//     title :"Menu",
// };
// let{width = prompt("width = ?"),title = prompt ("title = ?")} = options;
// alert(title);
// alert(width);

// let options={
//     title :"Menu",
// };
// let {wdith:w=100,height:h=200,title } = options;
// alert(title);
// alert(w);
// alert(h);

// // 剩余模式（pattern）"…"
// let options = {
//     title: "Menu",
//     height: 200,
//     width: 100
//   };
  
//   // title = 名为 title 的属性
//   // rest = 存有剩余属性的对象
//   let {title, ...rest} = options;
  
//   // 现在 title="Menu", rest={height: 200, width: 100}
//   alert(rest.height);  // 200
//   alert(rest.width);   // 100



// let title, width, height;
// // 这一行发生了错误
// {title, width, height} = {title: "Menu", width: 200, height: 100};
// 问题在于 JavaScript 把主代码流（即不在其他表达式中）的 {...} 当做一个代码块。
// let title, width, height;
// // 现在就可以了
// ({title, width, height} = {title: "Menu", width: 200, height: 100});
// alert( title ); // Menu




// // 嵌套解构
// let options = {
//     size: {
//       width: 100,
//       height: 200
//     },
//     items: ["Cake", "Donut"],
//     extra: true
//   };
//   // 为了清晰起见，解构赋值语句被写成多行的形式
//   let {
//     size: { // 把 size 赋值到这里
//       width,
//       height
//     },
//     items: [item1, item2], // 把 items 赋值到这里
//     title = "Menu" // 在对象中不存在（使用默认值）
//   } = options;
//   alert(title);  // Menu
//   alert(width);  // 100
//   alert(height); // 200
//   alert(item1);  // Cake
//   alert(item2);  // Donut



// // 智能函数参数
// let options = {
//     title :"My Menu",
//     items : ["Item1","Item2"]
// };
// function showMenu({title = "untitiled" , width =200 , height =100 ,items = []}){
//     alert(`${title} ${width} ${height}`);
//     alert(items);
// }
// showMenu(options);
// showMenu({}); // 不错，所有值都取默认值
// // showMenu(); // 这样会导致错误














