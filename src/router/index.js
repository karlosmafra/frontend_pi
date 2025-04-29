import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServicosView from '@/views/ServicosView.vue'
import CadastroView from '@/views/CadastroView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/servicos',
      name: 'servicos',
      component: ServicosView,
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: CadastroView,
    }
  ],
})

export default router
