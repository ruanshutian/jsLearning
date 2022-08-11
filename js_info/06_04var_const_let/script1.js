"use strict"

/**
 * “var” 没有块级作用域    在代码块外也是可见
 */

 if (true) {
    var test = true; // 使用 "var" 而不是 "let"
  }
  
  alert(test); // true，变量在 if 结束后仍存在

  /**
   * “var” 允许重新声明
   */
   var user = "Pete";

   var user = "John"; // 这个 "var" 无效（因为变量已经声明过了）
   // ……不会触发错误
   
   alert(user); // John

   /**
    * “var” 声明的变量，可以在其声明语句前被使用    当函数开始的时候，就会处理 var 声明（脚本启动对应全局变量）。
    */

    function sayHi() {
        phrase = "Hello";
      
        alert(phrase);
      
        var phrase;
      }
      sayHi();

// 创建 IIFE 的方法

(function() {
    alert("Parentheses around the function");
  })();
  
  (function() {
    alert("Parentheses around the whole thing");
  }());
  
  !function() {
    alert("Bitwise NOT operator starts the expression");
  }();
  
  +function() {
    alert("Unary plus starts the expression");
  }();
  

