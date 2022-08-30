





class Axios{
    constructor() {
    }

    // 封装ajax请求
    request(config){
        return new Promise(function (resolve,reject){
            let xhr = new XMLHttpRequest();
            let {url = " ",data =null,method = "get ",header={}}=config;
            xhr.open(method,url);
            xhr.onload = function (){
                resolve(xhr.responseText);
            }
            xhr.send(data);
        })
    }
}

//将类变成一个实例化方法
function createAxios(){
    const http = new Axios();
    const res = http.request();
    return res;
}

let axios = createAxios();


