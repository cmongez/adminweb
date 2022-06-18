import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import AdministrarView from '../views/AdministrarView.vue'
import Admin from '../components/Admin.vue'
import LayoutView from '../views/LayoutView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/layout',
    name: 'layout',
    component: LayoutView,
    children:[
      {
        path: '/home',
        name: 'home',
        component: HomeView
      },
      {
        path:'/administrar',
        name: 'administrar',
        component: AdministrarView,
        children:[
          {
            path:":id",
            name:"admin",
            component: Admin
          }
        ]
      }
      
    ]
  },
  
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
