"use strict"


// 创建
// let now = new Date();
// alert(now);

// let Jan01_1970 = new Date(0);
// alert(Jan01_1970);

// let Jan02_1970 = new Date(24*3600*1000);
// alert(Jan02_1970);

// let date = new Date("2017-01-26");
// alert(date);

// let date = new Date(2011 ,0 ,1 ,2 ,3 ,4 ,567);
// alert(date);

// let date = new Date(2011, 0, 1, 0, 0, 0, 0); // 1 Jan 2011, 00:00:00
// alert(date);

// let date = new Date(2011, 0, 1); // 同样，时分秒等均为默认值 0

// 访问日期组件

// let date =new Date();
// alert(date.getHours());
// alert(date.getUTCHours());

// 设置日期组件
// let today = new Date();
// today.setHours(0);
// alert(today);


// // 自动校准（Autocorrection）//自动校准 是 Date 对象的一个非常方便的特性。我们可以设置超范围的数值，它会自动校准。
// let date = new Date(2013 ,0 ,32 );
// alert(date);

// // 日期转化为数字，日期差值
// let start = new Date();
// for(let i =0;i<100000;i++){
//     let doSomeThing = i*i*i;
// }
// let end  = new Date();
// alert(` the loop took ${end - start} ms`);


// // Date.now()
// let start = new Date();
// for(let i =0;i<100000;i++){
//     let doSomeThing = i*i*i;
// }
// let end  = Date.now();
// alert(` the loop took ${end - start} ms`);


// // 基准测试（Benchmarking)
// function diffSubtract(date1, date2) {
//     return date2 - date1;
//   }
//   function diffGetTime(date1, date2) {
//     return date2.getTime() - date1.getTime();
//   }
//   function bench(f) {
//     let date1 = new Date(0);
//     let date2 = new Date();
//     let start = Date.now();
//     for (let i = 0; i < 100000; i++) f(date1, date2);
//     return Date.now() - start;
//   }
// //   alert( 'Time of diffSubtract: ' + bench(diffSubtract) + 'ms' );
// //   alert( 'Time of diffGetTime: ' + bench(diffGetTime) + 'ms' );
// let time1 = 0;
// let time2 = 0;
// // 交替运行 bench(diffSubtract) 和 bench(diffGetTime) 各 10 次
// for (let i = 0; i < 10; i++) {
//   time1 += bench(diffSubtract);
//   time2 += bench(diffGetTime);
// }
// alert( 'Total time for diffSubtract: ' + time1 );
// alert( 'Total time for diffGetTime: ' + time2 );


// 对字符串调用 Date.parse
let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
alert(ms); // 1327611110417  (时间戳)

let date = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );
alert(date);







