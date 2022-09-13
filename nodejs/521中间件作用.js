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
app.use((req, res, next)=>{
    const time =Date.now();
    req.startTime =time;
    console.log("this is second 中间件")
    next();
})

app.get("/",(req, res)=>{
    res.send("home page "+req.startTime);
})

app.get("/user",(req, res)=>{
    res.send("user "+ req.startTime);
})


app.listen(80,()=>{
    console.log('http://127.0.0.1');
});


