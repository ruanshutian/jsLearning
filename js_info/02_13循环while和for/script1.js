"use strict"

//“while” 循环
// let i=0;
// while(i<3)
// {
//     alert(i);
//     i++;
// }

//do while
// do{
//     alert(i);
//     i--;
// }while(i>=0);

//for
// for(let i=0;i<3;i++)
// {
//     alert(i);
// }

// let j =0;
// for(;j<3;j)
// {
//     alert(j++);
// }

//continew    break
// let i=7;
// (i>5)?alert(i):continue;

outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
  
      let input = prompt(`Value at coords (${i},${j})`, '');
  
      // 如果是空字符串或被取消，则中断并跳出这两个循环。
      if (!input) break outer; // (*)
  
      // 用得到的值做些事……
    }
  }
  
  alert('Done!');

