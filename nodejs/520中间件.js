/**
 *
 *
 */



const express =require('express');
const app =express();


const mw =  (ewq,res,next)=>{
    console.log("this is 中间件");

    next();

};

//注册全局中间件
app.use(mw);

app.get("/",(req, res)=>{
    res.send("home page");
})


app.listen(80,()=>{
    console.log('http://127.0.0.1');
});


