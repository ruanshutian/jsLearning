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

let fruits = ["Apple", "Orange", "Pear"];
// alert(fruits.shift());
// alert(fruits);
// fruits.unshift("Apple");
// alert(fruits);
fruits.push("11","22");
fruits.unshift("333","444");
alert(fruits);




