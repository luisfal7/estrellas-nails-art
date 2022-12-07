import { createRouter, createWebHashHistory } from 'vue-router'
import estrellaRouter from '@/modules/estrellas-nails-art/router'

const routes = [

  {
    path: '',
    ...estrellaRouter
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
