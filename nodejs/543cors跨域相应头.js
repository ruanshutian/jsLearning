/**
 *
 *
 */

const express = require('express');

const router = express.Router();

router.get("/test",()=>{
    console.log("this is test");
})

//get接口
router.get("/get",(req, res)=>{
   const query = req.query;

    res.setHeader("Access-Cpntrol-Allow-Origin","http//127.0.0.1");

    res.setHeader("Access-Cpntrol-Allow-Headers","Content-TYpe,x-Custom-Header");

    res.setHeader("Access-Cpntrol-Allow-Methods","*");

   res.send(
       {
           status:0,
           msg:"GET请求成功！",
           data:query
       }
   )
});

//post接口
router.post("/post",(req, res)=>{
    const body =req.body;
    res.send({
        status:0,
        msg:"success",
        data:body
    })
})

module.exports = router;






