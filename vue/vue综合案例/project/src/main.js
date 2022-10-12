import Vue from 'vue'
import App from './App.vue'

import router from "@/router";

Vue.config.productionTip = false

import axios from "axios";

//引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


//全局配置axios
// axios.defaults.baseURL = "https://escook.cn"
// axios.defaults.baseURL = 'http://0.0.0.0:3015/'

/**
 * 首先说结论： localhost是127.0.0.1的域名，代表本机的回环地址，访问速度快,外部无法访问，适合在本地开发中使用。
 * 0.0.0.0代表本机上任何IP地址，外部可以通过ip地址访问，适合在发布环境中使用。
 */
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
