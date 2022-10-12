// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports = {
  devServer:{
    port :3014,
    open :true,
    proxy: 'https://escook.cn'
  }
}
// module.exports = {
//   devServer:{
//     proxy:'https://www.escook.cn'
//   }
// }