/**
 *
 *
 */

const express =require('express');

const  app =express();

app.use(express.urlencoded({
    extended:false
}));

const router = require('./541路由模块');

app.use('/api',router);


app.listen(80,()=>{
    console.log("express sever runing at http://127.0.0.1");
});




