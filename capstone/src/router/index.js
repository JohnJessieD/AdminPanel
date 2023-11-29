import { createRouter, createWebHistory } from 'vue-router'
import User from '../views/User.vue'
import Dashboard from '../views/Dashboard.vue';
import Sidebar from '../views/Sidebar.vue';
import Offices from '../views/Offices.vue';
import data from '../views/data.vue';
import register from '../views/register.vue';
import login from '../views/login.vue';
import Mainpage from '../views/Mainpage.vue';
const routes = [

  {
    path: '/',
    name: 'Mainpage',
    component: Mainpage
  }, 
   {
    path: '/login',
    name: 'login',
    component: login
  },
   {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/User',
    name: 'User',
    component: User
  },
  {
    path: '/data',
    name: 'data',
    component: data,
  },
  {
    path: '/Offices',
    name: 'Offices',
    component: Offices,
  },
  {
    path: '/Sidebar',
    name: 'Sidebar',
    component: Sidebar,
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
