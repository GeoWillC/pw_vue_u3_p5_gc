import { createApp } from 'vue'
import App from './App.vue'

import router from './router/router'
//use(router) para que se agregue

createApp(App).use(router).mount('#app')
