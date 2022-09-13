/**
 * 创建web服务器
 */

const express =require('express');

const  app = express();

// app.use(express.static('../navigation'));
// app.use(express.static('./test'));
// app.use(express.static('./'));

app.use("/test2",express.static("./test2"));
app.use("/",express.static("test"));



app.listen(80,()=>{
 console.log('express server running at http://127.0.0.1');
})


