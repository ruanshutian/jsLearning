// import { createApp } from 'vue'
// import App from './App.vue'
// import './index.css'
//
// createApp(App).mount('#app')



// 1 按需导入createApp函数
import {createApp} from "vue";
// 2 导入待渲染的App.vue组件
import App from './App.vue'


// 导入组件
import HW  from "./components/HelloWorld.vue";
import TC from "./components/globol/test-compenents.vue";


// 3 调用createApp函数，创建SPA应用实例
const app =createApp(App)



// 添加组件
app.component('my-HW',HW);
app.component('my-TC',TC);


// 4 调用mount()把App组件的模版结构，渲染到指定的el区域中
app.mount('#app');


