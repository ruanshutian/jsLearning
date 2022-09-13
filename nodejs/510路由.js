/**
 *
 * express 的路由：客户端请求和服务端处理函数之间的关系
 *
 *
 *
 * 先后顺序
 * 请求类型和请求url都匹配才成功
 *
 *
 *
 *
 */

const express =require('express');
const  app = express();

app.get("/",(req, res)=>{
res.send("hello world");
});

app.listen(80,()=>{
    console.log("express server is http://127.0.0.1");
});

