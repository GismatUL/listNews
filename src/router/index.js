import {createRouter ,createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes : [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/About.vue')
        },
        {
            path: '/news',
            name: 'news',
            component: () => import('../views/news/index.vue')
        },
        {
            path: '/news/create',
            name: 'newsCreate',
            component: () => import('../views/news/create.vue')
        }
    ]
})

export default router