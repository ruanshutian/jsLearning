/**
 *
 *
 */

const express =require('express');
const app =express();

const router = require('./511路由模块');

// app.use(router);

app.use('/api',router);

app.listen(80,()=>{
    console.log('http://127.0.0.1');
});


