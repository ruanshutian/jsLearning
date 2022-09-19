

/**
 * 生成器其实就是一个特殊的函数
 * 作用—— 异步编程
  */

// function * gen(arg){
//     console.log(arg)
//     let one = yield 11;
//     console.log(one);
//     let two = yield 22;
//     console.log(two);
//     let three = yield 33;
//     console.log(three);
// }
//
// let iterator = gen('AAA');
// console.log(iterator.next("A"));
// console.log(iterator.next('BBB'));
// console.log(iterator.next("CCC"));
// console.log(iterator.next("DDD"));


/**
 * 生成器实例_1
 */

//回调地狱
// setTimeout(()=>{
//     console.log(1111);
//     setTimeout(()=>{
//         console.log(2222);
//         setTimeout(()=>{
//             console.log(3333);
//         },3000);
//     },2000);
// },1000);



// function  one(){
//     setTimeout(()=>{
//         console.log(1111);
//         iterator.next();
//     },1000);
// }
// function  two(){
//     setTimeout(()=>{
//         console.log(2222);
//         iterator.next();
//     },2000);
// }
// function  three(){
//     setTimeout(()=>{
//         console.log(3333);
//         iterator.next();
//     },3000);
// }
//
// function *gen(){
//     yield one();
//     yield two();
//     yield three();
// }
// let iterator =gen();
// iterator.next();



/**
 * 生成器实例_2
 */








