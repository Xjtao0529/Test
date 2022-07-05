import { createRouter, createWebHashHistory } from 'vue-router'

const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
