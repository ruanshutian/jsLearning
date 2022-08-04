"use strict"


// let sum =(a,b)=>{
//     let result = a+b;
//     return result;
// }

// alert(sum(2,3));

/**
 * 
 * 在浏览器中调试
 * 
 * 代码风格
 * 
 * 注释
 * 
 * 忍者代码
 * 
 * 使用 Mocha 进行自动化测试
 * 
 * Polyfill 和转译器
 * 
 * Polyfill 和转译器
 * 
 */

//  function pow() {
//     return 8; // :) 我们作弊啦！
//   }

//  function pow(x,n) {
//     let result =1;
//     for(let i =0;i<n;i++)
//     {
//         result *=x;
//     }
//     return result; // 
//   }

  
//  describe("pow", function() {

//     it("raises to n-th power", function() {
//       assert.equal(pow(2, 3), 8);
//       assert.equal(pow(3, 4), 81);
//     });
  
//   });

//   describe("pow", function() {

//     it("2 raised to power 3 is 8", function() {
//       assert.equal(pow(2, 3), 8);
//     });
  
//     it("3 raised to power 4 is 81", function() {
//       assert.equal(pow(3, 4), 81);
//     });
  
//   });

//  function pow(x,n) {
//     let result =1;
//     for(let i =0;i<n;i++)
//     {
//         result *=x;
//     }
//     return result; // 
//   }

// describe("pow", function() {

//     describe("raises x to power 3", function() {
  
//       function makeTest(x) {
//         let expected = x * x * x;
//         it(`${x} in the power 3 is ${expected}`, function() {
//           assert.equal(pow(x, 3), expected);
//         });
//       }
  
//       for (let x = 1; x <= 5; x++) {
//         makeTest(x);
//       }
  
//     });
  
//     // ……可以在这里写更多的测试代码，describe 和 it 都可以添加在这。
//   });

//   describe("test", function() {

//     before(() => alert("Testing started – before all tests"));
//     after(() => alert("Testing finished – after all tests"));
  
//     beforeEach(() => alert("Before a test – enter a test"));
//     afterEach(() => alert("After a test – exit a test"));
  
//     it('test 1', () => alert(1));
//     it('test 2', () => alert(2));
  
//   });

// describe("pow", function() {

//     // ...
  
//     it("for negative n the result is NaN", function() {
//       assert.isNaN(pow(2, -1));
//     });
  
//     it("for non-integer n the result is NaN", function() {
//       assert.isNaN(pow(2, 1.5));
//     });
  
//   });

// function pow(x, n) {
//     if (n < 0) return NaN;
//     if (Math.round(n) != n) return NaN;
  
//     let result = 1;
  
//     for (let i = 0; i < n; i++) {
//       result *= x;
//     }
  
//     return result;
//   }


  if(!Math.trunc){
    Math.trunc = function (number){
        return number<0?Math.ceil(number):Math.floor(number);
    }
  }
alert(  Math.trunc(1));