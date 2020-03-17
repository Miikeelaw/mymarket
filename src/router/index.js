import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '../components/Login'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/Login'
  },

  {
    path: '/login',
    component: ()=> import( '../components/Login')
  },
  {
    path: '/home',
    component: ()=> import( '../components/home/Home')
  }
]
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next)=>{
  if(to.path =='/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if(!tokenStr) return next('/login')
  next()
})
export default router
