import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// //完整引入element UI
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI)

// //按需引入element Ui
// import {Button} from "element-ui";
// Vue.use(Button);

//js导入引入
import './element-ui'

import {Loading} from "element-ui";

//配置axios
import axios from "axios";
// axios.defaults.baseURL = "https://www.escook.cn"
// axios.defaults.baseURL = "https://localhost:8080"

//配置请求的拦截器
let loadingInstance = null;
axios.interceptors.request.use(config =>{
  loadingInstance = Loading.service({fullscreen:true});

  config.headers.Authorization = 'Bearer xxx'
  return config
})
axios.interceptors.response.use(respose =>{
  loadingInstance.close()
  return respose
})


Vue.prototype.$http = axios




new Vue({
  render: h => h(App),
}).$mount('#app')
