

/**
 * Promise——catch方法
 */



const p = new Promise(function (resolve, reject){
    setTimeout(()=>{
       reject("wrong");
    },1000);

});
p.then(()=>{},(err)=>{
    console.log(err);
});

p.catch((err)=>{
    console.log(err);
})
