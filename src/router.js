import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Search from './views/Search'
import classIfy from './views/classify'
import {isLogin} from "./assets/js/app";

Vue.use(Router)


let router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }, {
            path: '/search',
            name: 'search',
            component: Search
        }, {
            path: '/classify',
            name: '/classify',
            component: classIfy
        },
        {
            path: '/person-msg',
            name: 'person-msg',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/person-msg'),
            meta: {requiresAuth: true}
        },
        {
            path: '/shopcar',
            name: 'shopcar',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/shopcar'),
            meta: { requiresAuth: true }
        },
        {
            path: '/person-center',
            name: 'person-center',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/person-center'),
            meta: { requiresAuth: true }
        },
        {
            path: '/login',
            name: 'login',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/login')
        }
        ,
        {
            path: '/registered',
            name: 'registered',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/registered')
        }
        ,
        {
            path: '/protocol',
            name: 'protocol',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/protocol')
        },
        {
            path: '/person-center/setting',
            name: 'setting',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/person-set'),
            meta: { requiresAuth: true }
        },
        {
            path: '/person-center/setting/admin_address',
            name: 'admin_address',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/admin-address'),
            meta: { requiresAuth: true }
        },
        {
            path: '/person-center/set/admin_address/add_address',
            name: 'add_address',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/add-address'),
            meta: { requiresAuth: true }
        },
        {
            path: '/item_details',
            name: 'item_details',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/item-details'),
        },
        {
            path: '/item_back',
            name: 'item_back',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/person-setting'),
        },
        {
            path: '/set-address/:id',
            name: 'set-address',
            props: true,
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/set-address'),
        },
        {
            path: '/catecory/:pId',
            name: 'catecory',
            props: true,
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/catecory'),
        }
    ]
})
//配置全局路由守卫
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {//检查requiresAuth是否
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!isLogin()) {
            next({
                path: '/login',
                query: {redirect: to.fullPath}
            })
        } else {
            next()
        }
    } else {
        next() // 确保一定要调用 next()
    }
})
export default router
