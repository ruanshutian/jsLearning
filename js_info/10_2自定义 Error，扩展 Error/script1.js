"use strict"


/**
 * “try…catch” 语法
 */

//
// try {
//
//     alert('开始执行 try 中的内容');  // (1) <--
//
//     // ...这里没有 error
//
//     alert('try 中的内容执行完毕');   // (2) <--
//
// } catch (err) {
//
//     alert('catch 被忽略，因为没有 error'); // (3)
//
// }



// try {
//
//     alert('开始执行 try 中的内容');  // (1) <--
//
//     lalala; // error，变量未定义！
//
//     alert('try 的末尾（未执行到此处）');  // (2)
//
// } catch (err) {
//
//     alert(`出现了 error！`); // (3) <--
//
// }

/**
 * 因为 try...catch 包裹了计划要执行的函数，该函数本身要稍后才执行，这时引擎已经离开了 try...catch 结构。
 */
// try {
//     setTimeout(function() {
//         noSuchVariable; // 脚本将在这里停止运行
//     }, 1000);
// } catch (err) {
//     alert( "不工作" );
// }

/**
 * Error 对象
 */
// try{
//     lalala;
// }catch (err){
//     console.log('err.name =',err.name);
//     console.log('err.message=',err.message);
//     console.log('err.stack=',err.stack);
//     console.log('err=',err);
// }

/**
 * 可选的 “catch” 绑定
 */

// try{
//
// }catch {
//
// }

/**
 * 使用 “try…catch”
 */
// let json = "{ bad json }";
//
// try {
//
//     let user = JSON.parse(json); // <-- 当出现 error 时...
//     alert( user.name ); // 不工作
//
// } catch (err) {
//     // ...执行会跳转到这里并继续执行
//     alert( "很抱歉，数据有错误，我们会尝试再请求一次。" );
//     alert( err.name );
//     alert( err.message );
// }

/**
 * 抛出我们自定义的 error
 */
// let json = '{ "age": 30 }'; // 不完整的数据
//
// try {
//
//     let user = JSON.parse(json); // <-- 没有 error
//     alert( user.name ); // 没有 name！
//
// } catch (err) {
//     alert( "doesn't execute" );
// }

/**
 * “throw” 操作符
 */

// let json = '{ "age": 30 }'; // 不完整的数据
//
// try {
//
//     let user = JSON.parse(json); // <-- 没有 error
//
//     if (!user.name) {
//         throw new SyntaxError("数据不全：没有 name"); // (*)
//     }
//
//     alert( user.name );
//
// } catch(err) {
//     alert( "JSON Error: " + err.message ); // JSON Error: 数据不全：没有 name
// }
/**
 * 再次抛出（Rethrowing）
 */
//
// try {
//     user = { /*...*/ };
// } catch (err) {
//     if (err instanceof ReferenceError) {
//         alert('ReferenceError'); // 访问一个未定义（undefined）的变量产生了 "ReferenceError"
//     }
// }

// let json = '{ "age": 30 }'; // 不完整的数据
// try {
//
//     let user = JSON.parse(json);
//
//     if (!user.name) {
//         throw new SyntaxError("数据不全：没有 name");
//     }
//
//     blabla(); // 预料之外的 error
//
//     alert( user.name );
//
// } catch (err) {
//
//     if (err instanceof SyntaxError) {
//         alert( "JSON Error: " + err.message );
//     } else {
//         throw err; // 再次抛出 (*)
//     }
//
// }

// function readData() {
//     let json = '{ "age": 30 }';
//
//     try {
//         // ...
//         blabla(); // error!
//     } catch (err) {
//         // ...
//         if (!(err instanceof SyntaxError)) {
//             throw err; // 再次抛出（不知道如何处理它）
//         }
//     }
// }
//
// try {
//     readData();
// } catch (err) {
//     alert( "External catch got: " + err ); // 捕获了它！
// }


/**
 * try…catch…finally
 */
try {
    alert( 'try' );
    if (confirm('Make an error?')) BAD_CODE();
} catch (err) {
    alert( 'catch' );
} finally {
    alert( 'finally' );
}
