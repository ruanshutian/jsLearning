
// "use strict"

/**
 *
 * 回调
 */

// function loadScript(src,callback){
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = ()=>callback(script);
//     document.head.append(script);
// }
// loadScript('script1.js',function (){
//     sayHi();
// });

/**
 * 在回调中回调
 */
/**
 * 处理 Error
 */


// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;
//
//     script.onload = () => callback(null, script);
//     script.onerror = () => callback(new Error(`Script load error for ${src}`));
//
//     document.head.append(script);
// }
//
// loadScript('script2.js', function(error, script) {
//     if (error) {
//         // 处理 error
//     } else {
//         // 脚本加载成功
//         alert("success");
//         sayHi();
//     }
// });

/**
 * 厄运金字塔
 */

loadScript('script1.js', step1);

function step1(error, script) {
    if (error) {
        handleError(error);
    } else {
        // ...
        loadScript('script2.js', step2);
    }
}

function step2(error, script) {
    if (error) {
        handleError(error);
    } else {
        // ...
        loadScript('script3.js', step3);
    }
}

function step3(error, script) {
    if (error) {
        handleError(error);
    } else {
        // ...加载完所有脚本后继续 (*)
    }
}

//有其他方法可以避免此类金字塔。最好的方法之一就是 “promise”





