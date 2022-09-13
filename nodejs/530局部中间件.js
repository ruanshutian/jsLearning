/**
 *
 *
 */



const express =require('express');
const app =express();


const mw =  (ewq,res,next)=>{
    console.log("this is 局部中间件");

    next();

};
//局部中间件（不使用app.use）
app.get("/",mw,(req, res)=>{
    res.send("home page "+req.startTime);
})

app.get("/user",(req, res)=>{
    res.send("user "+ req.startTime);
})


app.listen(80,()=>{
    console.log('http://127.0.0.1');
});


