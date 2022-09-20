

//1 分别暴露

export let a ='1';
export function funcTest(){
    console.log("this is functest");
}


//2 统一暴露
let b =2;
function fun2(){
    console.log("this is test2");
}

export {b,fun2};

//3 默认暴露
export default {
    c:"sss",
    change:function (){
        console.log( "this is change");
    }
}



