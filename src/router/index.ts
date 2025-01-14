import { createRouter, createWebHistory } from 'vue-router'
import Client from '@/router/client';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash) {
      return { el: "#app", top: 0, behavior: "smooth" };
    }
  },
  routes: [
    ...Client,
  ],
})

export default router
