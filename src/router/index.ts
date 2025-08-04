import { createRouter, createWebHistory } from 'vue-router'
import LearnPage from '../components/LearnPage.vue'
import MarketPage from '../components/MarketPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LearnPage,
    },
    {
        path: '/market',
        name: 'market',
        component: MarketPage,
    },
  ],
})

export default router
