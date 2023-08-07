import { createRouter, createWebHistory } from 'vue-router'
import Content from '../App.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/asd',
      name: 'asd',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => (null)
    }
  ]
})


