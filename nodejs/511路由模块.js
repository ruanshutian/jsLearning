/**
 *
 *
 */

const express =require('express');
const {Router} = require("express");

const router = Router();

router.get("/user/list",(req, res)=>{
res.send("get user list");
});
router.post("/user/add",(req, res)=>{
    res.send("add user ");
});


module.exports = router;

