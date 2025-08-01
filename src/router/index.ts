import { createRouter, createWebHistory } from 'vue-router'
import LearnPage from '../components/LearnPage.vue'
import MarketPage from '../components/MarketPage.vue'
import UnderwritingPage from '../components/UnderwritingPage.vue'
import WarningsDisclaimers from '../components/WarningsDisclaimers.vue'
import TermsConditions from '../components/TermsConditions.vue'

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
    },
    {
        path: '/warnings-disclosures',
        name: 'warnings-disclosures',
        component: WarningsDisclaimers,
    },
    {
        path: '/terms-conditions',
        name: 'terms-conditions',
        component: TermsConditions,
    },
  ],
})

export default router
