

const http = require('http');
const path =require('path')
const fs =require('fs');
let server = http.createServer();
server.on('request',(req,res)=>{
    console.log("someone visit our server");

    // req 客户端相关
    const  url = req.url;
    console.log(url);

    // const fpath = path.join(__dirname,url);
    let fpath ='';
    // fpath =path.join(__dirname ,'/test.html');
    if(url === '/index'){
        console.log('qqqq')
        fpath =path.join(__dirname ,'../navigation/index.html');
    }
    else if(url === '/test'){
        fpath =path.join(__dirname, './test.html');
    }

    // console.log(fpath);
    fs.readFile(fpath,'utf-8',(err,dataStr)=>{
        if(err)return res.end('404 Not found .');
        // console.log(dataStr);
        res.end(dataStr);
    })

    res.setHeader('Content-Type', 'text/html;charset=utf-8');//解决中文乱码


});

server.listen(8000,()=>{
    console.log("http server running at http://127.0.0.1:8000");
})










