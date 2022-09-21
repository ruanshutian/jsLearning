
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path =require("path");

const  htmlPlugin = new HtmlWebpackPlugin({
    template:'./src/index.html',
    filename:'./index.html'
})
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    resolve:{
        alias:{
            '@':path.join(__dirname,'./src')
        }
    },
    devtool:"eval-source-map",
    entry:path.join(__dirname, './src/index.js'),
    output:{
        path:path.join(__dirname, 'dist'),
        filename:'js/bundle.js'
    },
    plugins:[htmlPlugin, new CleanWebpackPlugin()],
    devServer:{
        open:true,//首次打包成功后，自动打开浏览器
        // port:80,//在http协议中，如果端口号手80，则可以被省略
        // host:'127.0.0.1',//指定运行的主机地址
    },
    module:{
        rules:[
            //定义了不同模块对应的loader
            {test:/\.css/,use:['style-loader', 'css-loader']},
            //处理less的loader
            {test:/\.less/,use:['style-loader', 'css-loader','less-loader']},
            //处理图片文件
            {
                test: /\.ipg|png|gif$/,use: ['url-loader?limit=1000&outputPath=images']
            },
            //处理高级js,
            //配置babel-loader的时候，一定要排除node_modules目录中的js文件，因为第三方包中的js兼容性，不需要关心
            {
                test: /\.js$/,use:['babel-loader'],exclude:/node_mudules/
            }
        ]
    }
}