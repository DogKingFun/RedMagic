import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import FlowView from '../views/FlowView.vue'
import FlowView2 from '../views/FlowView2.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView 
  },
  {
    path: '/flow',
    name: 'flow',
    component: FlowView
  },
  {
    path: '/flow2',
    name: 'flow2',
    component: FlowView2
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router