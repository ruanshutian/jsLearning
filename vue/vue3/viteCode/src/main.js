// import { createApp } from 'vue'
// import App from './App.vue'
// import './index.css'
//
// createApp(App).mount('#app')



// 1 按需导入createApp函数
import {createApp} from "vue";
// 2 导入待渲染的App.vue组件
// import App from "./App.vue";
// import App from './components/003style冲突scoped/App.vue'
// import App from './components/004props/App.vue'
// import App from './components/005class&style/App.vue'
// import App from './components/006demo/App.vue'
// import App from './components/007props验证/App.vue'
// import App from './components/008计算机属性/App.vue'
// import App from './components/009自定义事件/App.vue'
// import App from './components/010v-model/App.vue'
// import App from './components/011watch/App.vue'
// import App from './components/012lifeCycle/App.vue'
// import App from './components/012lifeCycle/App.vue'
// import App from './components/013数据共享组件/App.vue'
// import App from './components/014brother/App.vue'
// import App from './components/015levelParentAndSon/App.vue'
// import App from './components/016Aios/App.vue'
// import App from './components/017ref/App.vue'
// import App from './components/018动态组件/App.vue'
// import App from './components/019插槽/App.vue'
// import App from './components/020自定义指令/App.vue'
// import App from './components/021前端路由/App.vue'
import App from './components/022vue-router/App.vue'

// 导入组件
import HW  from "./components/HelloWorld.vue";
import TC from "./components/001globol/test-compenents.vue";
import Test from "./components/003style冲突scoped/test.vue";
import TestSecond from "./components/003style冲突scoped/test2.vue";
import Article from "./components/004props/Article.vue"
import axios from "axios";

//导入路由
import router from "./components/022vue-router/router";

// 3 调用createApp函数，创建SPA应用实例
const app =createApp(App)

//路由
app.use(router)

//声明全局自定义指令
// app.directive(
//     'focus',{
//         mounted(el){
//             el.focus()
//         },
//         updated(el){
//             console.log("updated")
//             el.focus()
//         }
//     }
// )
app.directive(
    //函数简写
    'focus',(el)=>{
        el.focus()
    }
)
app.directive('color',(el, col)=>{
    el.style.color=col.value;
})


// 添加组件
app.component('my-HW',HW);
app.component('my-TC',TC);
app.component('Test',Test);
app.component('TestSecond',TestSecond);
app.component('Art',Article);


axios.defaults.baseURL = "https://www.escook.cn"
app.config.globalProperties.$http = axios


// 4 调用mount()把App组件的模版结构，渲染到指定的el区域中
app.mount('#app');


