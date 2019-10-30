import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'qr_reader',
    component: () => import('../views/QrReader.vue')
  },
  {
    path: '/ranking',
    name: 'ranking',
    component: () => import('../views/Ranking.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
