/**
 *
 *
 */

const express =require('express');

const  app =express();

app.use(express.urlencoded({
    extended:false
}));


//在cors之前调用jsonp
app.get("/api/jsonp",(req, res)=>{
   const funName=req.query.callback;

   const data = {name:'rst',age:18};

   const scripter = `${funName}(${JSON.stringify(data)})`;

   res.send(scripter);

});


const cors = require('cors');
app.use(cors());

const router = require('./541路由模块');

app.use('/api',router);


app.listen(80,()=>{
    console.log("express sever runing at http://127.0.0.1");
});




