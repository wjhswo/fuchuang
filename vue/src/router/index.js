import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "@/components/HomeSite.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
          path: '/',
          component: Home
        }
    ]
})
export default router;
