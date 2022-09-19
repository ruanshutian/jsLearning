

/**
 * 生成器其实就是一个特殊的函数
 * 作用—— 异步编程
  */

function  * gen(){
    console.log("hello gen ");
    yield '111';
    console.log("hello 1");
    yield '222';
    console.log("hello 2");
    yield '333';
    console.log("hello 3");
}

let iterator = gen();
// console.log(iterator);
// iterator.next();//使用next方法调用
// iterator.next();
// iterator.next();
// iterator.next();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// for(let v of gen()){
//     console.log(v);
// }
