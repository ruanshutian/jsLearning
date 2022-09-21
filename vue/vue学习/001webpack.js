

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
 */


