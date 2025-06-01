import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServicosView from '@/views/ServicosView.vue'
import CadastroView from '@/views/CadastroView.vue'
import LoginView from '@/views/LoginView.vue'
import PerfilProfissionalView from '@/views/PerfilProfissionalView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
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
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/profissional',
      name: 'profissional',
      component: PerfilProfissionalView,
    }
  ],
})

export default router
