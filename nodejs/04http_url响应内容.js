

const http = require('http');
let server = http.createServer();
server.on('request',(req,res)=>{
    console.log("someone visit our server");

    // req 客户端相关
    const  url = req.url;

    let content ='<h1>404 Not found!</h1>';

    if(url ==='/' || url ==='/index.html'){
        content ='<h1>首页</h1>';
    }else if(url ==='/about.html'){
        content ='<h1>关于页面</h1>'
    }

    // res 服务端相关

    res.setHeader('Content-Type', 'text/html;charset=utf-8');//解决中文乱码
    res.end(content);

});

server.listen(8000,()=>{
    console.log("http server running at http://127.0.0.1:8000");
})










