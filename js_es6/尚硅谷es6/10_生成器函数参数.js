

/**
 * 生成器其实就是一个特殊的函数
 * 作用—— 异步编程
  */

function * gen(arg){
    console.log(arg)
    let one = yield 11;
    console.log(one);
    let two = yield 22;
    console.log(two);
    let three = yield 33;
    console.log(three);
}

let iterator = gen('AAA');
console.log(iterator.next("A"));
console.log(iterator.next('BBB'));
console.log(iterator.next("CCC"));
console.log(iterator.next("DDD"));
