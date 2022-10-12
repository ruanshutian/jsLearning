import Vue from "vue";
import VueRouter from "vue-router";
import UserList from "@/components/UserList.vue";

Vue.use(VueRouter)

const router = new VueRouter({
    //这里声明路由规则
    routes:[
        {
            path:'/', redirect:'/users'
        },
        {
            path:"/users",component:UserList
        }
    ],
})

export default router
