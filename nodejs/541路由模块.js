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






