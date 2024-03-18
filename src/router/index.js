import { createRouter, createWebHashHistory } from 'vue-router'
import LogIn from "@/views/LogIn.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
          path: '/',
          component: LogIn
        }
    ]
})
export default router;
