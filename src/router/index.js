import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    meta: {
      requiresAuth: true, 
    },
    component: () => import('../views/Dashboard.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token') != null;
  if (to.name === 'home' && token){
    next({ name: 'dashboard' })
  }else if(to.matched.some(record => record.meta.requiresAuth)) {
      if (!token) {
        next({
          path: '/',
          query: { redirect: to.fullPath }
        })
      } else { 
         next() 
    }
  }else {
     next()
  }
})

export default router
