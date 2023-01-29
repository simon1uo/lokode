import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Vant from 'vant'
import '@vant/touch-emulator'
import 'vant/lib/index.css'

import App from './App.vue'
import router from './router'

import 'tdesign-vue-next/dist/reset.css'
import 'normalize.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vant)

app.mount('#app')
