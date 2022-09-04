

const http = require('http');
let server = http.createServer();
server.on('request',(req,res)=>{
    console.log("someone visit our server");

    // req 客户端相关
    const  url = req.url;
    const method = req.method;
    const str = `我的中文 Your request url is ${url} and Your request method id ${method}`;
    console.log(str);

    // res 服务端相关

    res.setHeader('Content-Type', 'text/html;charset=utf-8');//解决中文乱码
    res.end(str)

});

server.listen(8000,()=>{
    console.log("http server running at http://127.0.0.1:8000");
})

