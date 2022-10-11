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

new Vue({
  render: h => h(App),
}).$mount('#app')
