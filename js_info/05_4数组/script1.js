"use strict"

//创建数组
// let arr1 =[];
// let arr2 =new Array();

// let fruits = ["Apple","Orange","Plum"];
// alert(fruits[0]);
// alert(fruits[1]);
// alert(fruits[2]);
// alert(fruits);

// 数组可以存储任何类型的元素。
// let arr = ["Apple ", 
// {name :"John"},
// true,
// function(){
//     alert("Hello");
// }];
// alert(arr[1].name);
// arr[3]();

// //使用 “at” 获取最后一个元素
// let fruits = ["Apple", "Orange", "Plum"];
// alert(fruits.at(1));


/**
 * JavaScript 中的数组既可以用作队列，也可以用作栈。它们允许你从首端/末端来添加/删除元素。
这在计算机科学中，允许这样的操作的数据结构被称为 双端队列（deque）。
 */
// let fruits = ["Apple", "Orange", "Pear"];
// alert(fruits.pop());
// alert(fruits);
// fruits.push("Pear");
// alert(fruits);

// let fruits = ["Apple", "Orange", "Pear"];
// // alert(fruits.shift());
// // alert(fruits);
// // fruits.unshift("Apple");
// // alert(fruits);
// fruits.push("11","22");
// fruits.unshift("333","444");
// alert(fruits);

// let fruits = ["Banana"];
// let arr =fruits;
// alert(arr ===fruits);
// arr.push("Pear");
// alert(fruits);
// alert(arr);


//循环
// let arr = ["Apple", "Orange", "Pear"];
// for(let i=0;i<arr.length;i++){
//     alert(arr[i]);
// }
// for(let x of arr){
//     alert(x);
// }
// for(let i in arr){
//     alert(arr[i]);
// }

// // 关于 “length”
// let fruits = [];
// fruits[123] = "Apple";
// alert( fruits.length ); // 124

// let arr = [1, 2, 3, 4, 5];
// arr.length = 2; // 截断到只剩 2 个元素
// alert( arr ); // [1, 2]
// arr.length = 5; // 又把 length 加回来
// alert( arr[3] ); // undefined：被截断的那些数值并没有回来

// // new Array()
// // let arr = new Array("Apple","Pear","etc");
// let arr =new Array(2);
// alert(arr[0]);
// alert(arr.length);

//多维数组

// //数组有自己的 toString 方法的实现，会返回以逗号隔开的元素列表。
// let arr =[1,2,3];
// alert(arr);
// alert(String(arr)==='1,2,3');

// alert([]+1);
// alert([1]+1);
// alert([1,2]+1);

//不要使用 == 比较数组
alert( [] == [] ); // false
alert( [0] == [0] ); // false
alert( 0 == [] ); // true
alert('0' == [] ); // false



