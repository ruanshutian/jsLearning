

/**
 *  对象扩展
 */

// 判断两个值是否相等
// console.log(Object.is(120,120));
// console.log(Object.is(NaN,NaN));
// console.log(NaN === NaN);


// // 对象合并
// const config1 = {
//     host:'localhost',
//     port:3306,
//     name:"root",
//     pass:"root",
//     test:"test"
// }
// const config2 = {
//     host:'localhost2',
//     port:3304,
//     name:"root2",
//     pass:"root2",
//     test:"test111",
//     test2:"test2"
// }
//
// // console.log(Object.assign(config2,config1));
// console.log(Object.assign(config1,config2));
// console.log(config1)
// console.log(config2)


// 设置原型对象

const school = {
    name:"ustc"
};
const cities = {
    xiaoqu :["a","b","c"]
}
Object.setPrototypeOf(school ,cities);
console.log(Object.getPrototypeOf(school));
console.log(school);

