/**
 * 字面量
 * 可以直接使用字面量进行类型声明
 */

let a:10;
a = 10;

/**
 * 可以使用 ｜ 来连接多个类型
 */

let c:boolean | string;
c =true;
c = "hello"

/**
 * any 表示任意类型， 一个变量设置类型为any后相当于对该变量关闭了TS的类型检测
 * 使用TS的时候，不建议使用any类型
 */
 // let d:any;

/**
 * 声明变量乳沟不指定类型，则TS解析器会自动判断变量的类型为any（隐式any）
 */
let d;

d = 10;
d = "hello";
d = true;

//unknown表示未知类型的值
let e:unknown;
e =10;
e ="hello";
e =true;

let s:string;
//d 的 类型any他可以赋值任意变量
// s = d;
e = 'hello';
// s =e ;//unknown类型则不能赋值给别的


if(typeof e === "string"){
    s = e ;
}


/**
 * 类型断言，可以用来告诉解析器变量的实际类型
 * 1 变量 as 类型
 * 2 <类型> 变量
 */
s = e as string;
s = <string>e;


/**
 * void 表示空，没有返回值
 */

function fn():void{
    // return;
    return null;
}

/**
 * never 没有值
 */

function neverFun():never{
    throw new Error("报错了");
}






