import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
import 'virtual:svg-icons-register'
import gloalComponent from '@/components';
import router from './router';

const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus)
app.use(router)
app.use(gloalComponent)
app.mount('#app')


