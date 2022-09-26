// import { createApp } from 'vue'
// import App from './App.vue'
// import './index.css'
//
// createApp(App).mount('#app')



// 1 按需导入createApp函数
import {createApp} from "vue";
// 2 导入待渲染的App.vue组件
// import App from './components/003style冲突scoped/App.vue'
import App from './components/004props/App.vue'


// 导入组件
import HW  from "./components/HelloWorld.vue";
import TC from "./components/001globol/test-compenents.vue";
import Test from "./components/003style冲突scoped/test.vue";
import TestSecond from "./components/003style冲突scoped/test2.vue";
import Article from "./components/004props/Article.vue"

// 3 调用createApp函数，创建SPA应用实例
const app =createApp(App)



// 添加组件
app.component('my-HW',HW);
app.component('my-TC',TC);
app.component('Test',Test);
app.component('TestSecond',TestSecond);
app.component('Art',Article);


// 4 调用mount()把App组件的模版结构，渲染到指定的el区域中
app.mount('#app');


