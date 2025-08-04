import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PageHeader from './components/PageHeader.vue'
import DisclaimerFooter from './components/DisclaimerFooter.vue'

const app = createApp(App)
app.component('PageHeader', PageHeader);
app.component('DisclaimerFooter', DisclaimerFooter);

app.use(router)

app.mount('#app')
