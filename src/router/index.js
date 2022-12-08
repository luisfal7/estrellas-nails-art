import { createRouter, createWebHashHistory } from 'vue-router'
import estrellaRouter from '@/modules/estrellas-nails-art/router'
import authRouter from "@/modules/auth/router";

const routes = [

  {
    path: '',
    ...estrellaRouter
  },
  {
    path: '/login',
    ...authRouter
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
