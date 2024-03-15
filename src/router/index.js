import { createRouter, createWebHashHistory } from 'vue-router'
import User from "@/views/MainInterfaceForUser.vue";
import login from "@/views/LogIn.vue";
import Company from "@/views/MainInterfaceForCompany.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
          path: '/User',
          component: User
        },
        {
          path: '/login',
          component: login
        },
        {
          path: '/',
          component: Company
        }
    ]
})
export default router;
