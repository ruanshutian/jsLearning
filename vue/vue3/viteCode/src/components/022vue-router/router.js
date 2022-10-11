import {createRouter, createWebHashHistory} from 'vue-router'
import MyHome from "./MyHome.vue";
import MyMovie from "./MyMovie.vue";
import MyAbout from "./MyAbout.vue";
import Tab1 from "./Tab1.vue";
import Tab2 from "./Tab2.vue";

//创建路由对象
const router = createRouter({
    history:createWebHashHistory(),
    linkActiveClass:"router-active"
    ,
    routes:[
        {path:"/",redirect:'/home'},
        {path:'/home', component:MyHome},
        {name:'mov',path:'/movie/:id',component:MyMovie , props:true },
        {
            path:'/about',
            component:MyAbout,
            redirect:'/about/tab1',
            children:[
                {path:'tab1',component:Tab1},
                {path:'tab2',component:Tab2}
            ]}
    ]
})

//声明全局的导航守卫
router.beforeEach((to,from,next)=>{
    // console.log("to = ",to);
    // console.log("from = ",from);
    // console.log("next = ",next);
    // console.log("ok");
    // next();

    const tokenStr = localStorage.getItem("token");
    console.log(tokenStr)

    if(to.path === '/home' && !tokenStr){
        // next()
        // next(false);
        next('/about');
    }
    else {
        next();
    }
})

export default router
