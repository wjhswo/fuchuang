import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index"
import ArcoVue from "@arco-design/web-vue"

const app = createApp(App)
app.use(router)
app.use(ArcoVue)
app.mount('#app')
