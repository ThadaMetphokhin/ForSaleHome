import { createRouter, createWebHistory } from 'vue-router'
import Content from '../App.vue'
import ads from './ads.txt'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/ads',
      name: 'ads',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => (ads)
    }
  ]
})

export default router
