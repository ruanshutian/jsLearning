
let path = require('path');

module.exports = {
    // mode:'development'
    //production    or   development
    mode:'production',
    //指定处理文件的路径
    entry:path.join(__dirname,'./src/index.js'),
    //指定生存文件路径
    output:{
        path:path.join(__dirname, './dist'),
        filename:"bundle.js"
    }

}