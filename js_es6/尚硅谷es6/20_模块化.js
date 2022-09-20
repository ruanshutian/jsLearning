

/**
 *  模块化
 *  1、防止命名冲突
 *  2、代码复用
 *  3、高维护性
 *
 */

/**
 * export 规定模块对外的接口
 * import 输入其他模块的功能
 *
 */

// 1、通用引入方式
import * as m from "./19_模块化_test.js";
import {funcTest} from "./19_模块化_test.js";

console.log(m);
m.funcTest()

// 2 解构赋值
import {a,b} from "./19_模块化_test.js"
console.log(a);
import {a as aaa} from "./19_模块化_test.js";//as xxx解决命名冲突
console.log(aaa)
import {default as sss} from "./19_模块化_test.js";//默认暴露
console.log(sss);


//3 简便形式  （只用于默认暴露）
import ddd from "./19_模块化_test.js";

console.log(ddd);




