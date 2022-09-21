

/**
 *
 *  webpack
 *
 *
 * // 安装
 *  npm install webpack@5.42.1 webpack-cli@4.7.2 -D
 *
 *  -D     --save-dev简写
 *  -S     --save简写
 *
 */

/**
 * package.json
 *
 * {
 *   "name": "webpack_test_save",
 *   "version": "1.0.0",
 *   "description": "",
 *   "main": "index.js",
 *   "scripts": {
 *     "test": "echo \"Error: no test specified\" && exit 1"
 *   },
 *   "keywords": [],
 *   "author": "",
 *   "license": "ISC",
 *   "dependencies": { //部署上线和开发都需要用到
 *     "jquery": "^3.6.1"
 *   },
 *   "devDependencies": {// 只在开发阶段
 *     "webpack": "^5.42.1",
 *     "webpack-cli": "^4.7.2"
 *   }
 * }
 */

/**
 * package.json
 *
 *   "scripts": {
 *     "dev": "webpack"
 *   },
 *
 *   使用 npm run dev  => npm run webpack命令
 *   默认找 src/index.js
 *
 *   module.exports = {
 *     // mode:'development'
 *     //production    or   development
 *     mode:'production'
 * }
 *
 *  mode ： production  —— 速度慢+ 占内存小   ——  上线的时候
 *  mode ：development  —— 速度块+ 占内存大   ——  开发的时候
 *
 *  如果要不想找默认路径，可以修改这里的配置
 *  webpack.config.js
 *  // mode:'development'
 *     //production    or   development
 *     mode:'production',
 *     //指定处理文件的路径
 *     entry:path.join(__dirname,'./src/index.js'),
 *     //指定生存文件路径
 *     output:{
 *         path:path.join(__dirname, './dist'),
 *         filename:"bundle.js"
 *     }
 *
 *
 */

/**
 *
 *  webpack中的插件
 *  npm install webpack-dev-server@3.11.2 -D
 *  "dev": "webpack server"
 *
 * {
 *   "name": "webpack_test_save",
 *   "version": "1.0.0",
 *   "description": "",
 *   "main": "index.js",
 *   "scripts": {
 *     "test": "echo \"Error: no test specified\" && exit 1",
 *     "dev": "webpack server"
 *   },
 *   "keywords": [],
 *   "author": "",
 *   "license": "ISC",
 *   "dependencies": {
 *     "jquery": "^3.6.1"
 *   },
 *   "devDependencies": {
 *     "webpack": "^5.42.1",
 *     "webpack-cli": "^4.7.2",
 *     "webpack-dev-server": "^3.11.2"
 *   }
 * }
 *
 */


/**
 *
 * npm i html-webpack-plugin
 *
 * const HtmlWebpackPlugin = require('html-webpack-plugin');
 *
 * const  htmlPlugin = new HtmlWebpackPlugin({
 *     template:'./src/index.html',
 *     filename:'./index.html'
 * })
 *
 * module.exports = {
 *     mode: 'development',
 *     plugins:[htmlPlugin]
 * }
 *
 * template 复制到  8080   filename:'./index.html'内存里面
 * 所以打开8080就可以看到index.html页面
 *
 * html-webpack-plugin
 * 1 复制页面到根目录内存
 * 2 添加scrip脚本  <script src = "xxx.js"></script>  连接到指定js渲染这个index.html
 *
 */

/**
 *
 * webpack处理
 *
 *                                                                                            ｜———>调用loader处理
 *                                                                    ｜—————>是否配置了babel————
 *                                          ｜————>是否包含高级js语法—————                        ｜———>报错
 * 将要被webpack打包处理的文件模块——>是否为js模块—                           ｜—————>webpack进行处理
 *                                          ｜
 *                                          ｜                            ｜—————>调用loader处理
 *                                          ｜————>是否配置了对应的loader—————
 *                                                                         ｜—————>报错
 *
 *
 * loader 调用过程
 *
 *
 * npm i style-loader css-loader -D
 *  webpack.config.js 的 module->rules数组
 *
 *      },
 *     module:{
 *         rules:[
 *             //定义了不同模块对应的loader
 *             {test:/\.css/,use:['style-loader', 'css-loader']}
 *         ]
 *     }
 *
 *
 * 1、webpack默认只能打包处理js文件，处理不了别的
 * 2、在js中发现css模块
 * 3、webpack发现处理不了的css后，找webpack.config.js这个配置文件，看module.rules数组中，是否配置loader加载器
 * 4、webpack把index.css这个文件，先转交给最后一个loader进行处理（先转交给css-loader)
 * 5、把处理的结果转交给style-loader
 * 6、当style-loader处理完毕之后，发现没有下一个loader了，于是就把处理的结果转交给webpack
 * 7、webpack把style-loader处理的结果，合并到dist/bundle.js中，最终生成打包文件
 *
 */


/**
 *
 * less
 * npm i less-loader -D
 *
 *
 *     module:{
 *         rules:[
 *             //定义了不同模块对应的loader
 *             {test:/\.css/,use:['style-loader', 'css-loader','less-loader']}
 *         ]
 *     }
 *
 *
 *
 */


/**
 * 处理图片
 * npm i url-loader file-loader -D
 *
 */

/**
 *
 * npm i babel-loader @babel/core @babel/plugin-proposal-decorators -D
 *
 *             //处理高级js,
 *             //配置babel-loader的时候，一定要排除node_modules目录中的js文件，因为第三方包中的js兼容性，不需要关心
 *             {
 *                 test: /\.js$/,use:['babel-loader'],exclude:/node_mudules/
 *             }
 *
 * 新建babel.config.js文件
 * https://babeljs.io/docs/en/babel-plugin-proposal-decorators
 *
 * {
 *   "plugins": ["@babel/plugin-proposal-decorators"]
 * }
 *
 *
 */


/**
 * build 项目发布
 *   "scripts": {
 *     "dev": "webpack serve",//开发命令中运行
 *     "build": "webpack --mode production"//项目发布的时候，运行命令
 *   },
 */

/**
 *
 * 指定output文件路径
 *
 * module.exports = {
 *     mode: 'development',
 *     entry:path.join(__dirname, './src/index.js'),
 *     output:{
 *         path:path.join(__dirname, 'dist'),
 *         filename:'js/bundle.js'
 *     },
 *
 *             {
 *                 test: /\.ipg|png|gif$/,use: ['url-loader?limit=1000&outputPath=images']
 *             },
 *
 */

/**
 * 每次发布自动删除之前的
 * clean-webpack-plugin插件
 *
 * https://www.npmjs.com/package/clean-webpack-plugin
 *
 */


