

/**
 * set基本用法
 */

// let s = new Set();
// let s2 = new Set(['1','2','3','4','1','2']);
//
//
// s.add("222");
// s.delete('222');
// console.log(s.has('222'));
// console.log(s2.size)
// s2.clear()
//
// console.log(s)
// console.log(s2);


/**
 * set应用
 */

let arr = [1,2,3,4,5,4,1,2,3];
// 1、数组去重
let result = [...new Set(arr)];
console.log(result)

// 2、交集
let arr2 = [4,5,6,5,6];
let result2 = [...new Set(arr)].filter(item =>{
    let s2 = new Set(arr2);
    if(s2.has(item)){
        return true;
    }
    else return false;
})
console.log(result2)
let result3 = [...new Set(arr)].filter(item=>new Set(arr2).has(item));
console.log(result3);

//并集
let result4 = [...new Set([...arr, ...arr2])]
console.log(result4)

//差集
let diff1 = [...new Set(arr)].filter(item=> !(new Set(arr2).has(item)));
console.log(diff1);

