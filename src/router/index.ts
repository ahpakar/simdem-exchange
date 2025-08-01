import { createRouter, createWebHistory } from 'vue-router'
import LearnPage from '../components/LearnPage.vue'
import MarketPage from '../components/MarketPage.vue'
import UnderwritingPage from '../components/UnderwritingPage.vue'

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
    {
        path: '/underwriting',
        name: 'underwriting',
        component: UnderwritingPage,
    }
  ],
})

export default router
