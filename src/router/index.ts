import { createRouter, createWebHistory } from 'vue-router'
import Privacy from '../components/Privacy.vue'
import LearnPage from '../components/LearnPage.vue'
import MarketPage from '../components/MarketPage.vue'
import UnderwritingPage from '../components/UnderwritingPage.vue'
import WarningsDisclaimers from '../components/WarningsDisclaimers.vue'
import TermsConditions from '../components/TermsConditions.vue'

const routes: any[] = [
    {path: '/', name: 'home', component: LearnPage},
    {path: '/learn', redirect: '/'},
    {path: '/market', name: 'market', component: MarketPage},
    {path: '/underwriting', name: 'underwriting', component: UnderwritingPage},
    {path: '/legal', name: 'legal', component: WarningsDisclaimers},
    {path: '/terms-conditions', name: 'terms-conditions', component: TermsConditions},
    {path: '/privacy', name: 'privacy', component: Privacy},
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
