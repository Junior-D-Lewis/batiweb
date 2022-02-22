import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/News.vue')
    },
    {
      path: '/subscription',
      name: 'subscription',
      component: () => import('../views/Subscription.vue')
    },
    {
      path: '/contract',
      name: 'contract',
      component: () => import('../views/Contract.vue')
    },
    {
      path: '/tele-insurance',
      name: 'tele-insurance',
      component: () => import('../views/Tele-insurance.vue')
    },
    {
      path: '/address-book',
      name: 'address-book',
      component: () => import('../views/Address-book.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/myCourtierSpace',
      name: 'myCourtierSpace',
      component: () => import('../components/MyCourtierSpace.vue')
    }
  ]
})

export default router
