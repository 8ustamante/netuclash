import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory('#'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/:pathMatch(.*)*', 
      name: 'NotFound', 
      component: () => import('../components/404.vue')
    },
    {
      path: '/aldea-principal', 
      name: 'Aldea Principal', 
      component: () => import('../components/AldeaPrincipal.vue')
    },
    {
      path: '/prueba', 
      name: 'prueba', 
      component: () => import('../components/Prueba.vue')
    },
  ]
})

export default router
