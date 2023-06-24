import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import LottieAnimation from 'lottie-web-vue'

import App from './App.vue'
import router from './router'

import './assets/app.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.mount('#app')
