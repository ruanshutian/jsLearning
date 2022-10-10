import {createRouter, createWebHashHistory} from 'vue-router'
import MyHome from "./MyHome.vue";
import MyMovie from "./MyMovie.vue";
import MyAbout from "./MyAbout.vue";
import Tab1 from "./Tab1.vue";
import Tab2 from "./Tab2.vue";

const router = createRouter({
    history:createWebHashHistory(),
    linkActiveClass:"router-active"
    ,
    routes:[
        {path:"/",redirect:'/home'},
        {path:'/home', component:MyHome},
        {path:'/movie/:id',component:MyMovie , props:true },
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

export default router
