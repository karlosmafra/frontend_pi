import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServicosView from '@/views/ServicosView.vue'
import CadastroView from '@/views/CadastroView.vue'
import ProfissionalView from '@/views/ProfissionalView.vue'

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
    },
    {
      path: '/login',
      name: 'login',
      component: CadastroView,
    },
    {
      path: '/profissional',
      name: 'profissional',
      component: ProfissionalView,
    }
  ],
})

export default router
