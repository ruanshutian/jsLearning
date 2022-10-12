import Vue from 'vue'
import App from './App.vue'

import router from "@/router";

Vue.config.productionTip = false

import axios from "axios";

//引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//声明全局过滤器
Vue.filter('dataFormat',(dtStr)=>{
  const dt = new Date(dtStr);
  let y = dt.getFullYear();
  let m = dt.getMonth()+1;
  let d = dt.getDay();
  let hh = dt.getHours();
  let mm = dt.getMinutes();
  let ss = dt.getSeconds();

  y=padZero(y);
  m=padZero(m);
  d=padZero(d);
  hh=padZero(hh);
  mm=padZero(mm);
  ss=padZero(ss);

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;

})
function padZero(n){
  return n>9?n:"0"+n;
}


//全局配置axios
// axios.defaults.baseURL = "https://escook.cn"
// axios.defaults.baseURL = 'http://0.0.0.0:3015/'

/**
 * 首先说结论： localhost是127.0.0.1的域名，代表本机的回环地址，访问速度快,外部无法访问，适合在本地开发中使用。
 * 0.0.0.0代表本机上任何IP地址，外部可以通过ip地址访问，适合在发布环境中使用。
 */
Vue.prototype.$http = axios


import {Loading} from "element-ui";

//loading
let loadingInstance = null;
axios.interceptors.request.use((config)=>{
  loadingInstance = Loading.service({fullscreen:true});
  return config
})

axios.interceptors.response.use((response)=>{
  loadingInstance.close();
  return response;
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
