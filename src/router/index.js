import { createRouter,createWebHistory } from "vue-router";
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Contact from '../views/ContactView.vue'
import NotFound from '../views/NotFoundView.vue'





const routes = [
    {
        path:'/',
        name:'home',
        component:Home
    },
    {
        path:'/about',
        name:'about',
        component:About
    },
    {
        path:'/contact',
        name:'contact',
        component:Contact
    },
    {
        path:'/notFound',
        name:'notFound',
        component:NotFound
    }
    
]




const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router