/**
 * 创建web服务器
 */

const express =require('express');

const  app = express();

app.get("/user",(req, res)=>{
  res.send(
      {
       name:'rst',
       age:20,
       gender:"male"
      }
  )
});

app.post("/user",(req, res)=>{
 res.send("send success");
});

app.get("/",(req, res)=>{
 console.log(req.query);
 res.send(req.query);
});

//id是一个动态参数
app.get("/user/:id",(req, res)=>{
 console.log(req.params);
 res.send(req.params);
});

//id是一个动态参数
app.get("/user/:id/:name",(req, res)=>{
 console.log(req.params);
 res.send(req.params);
});

app.listen(80,()=>{
 console.log('express server running at http://127.0.0.1');
})


