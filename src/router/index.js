import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServicosView from '@/views/ServicosView.vue'
import CadastroView from '@/views/CadastroView.vue'
import LoginView from '@/views/LoginView.vue'
import PerfilProfissionalView from '@/views/PerfilProfissionalView.vue'
import PaginaProfissionalView from '@/views/PaginaProfissionalView.vue'
import PaginaProfissionalReviews from '@/views/PaginaProfissionalReviews.vue'
import PaginaProfissionalEscreverReview from '@/views/PaginaProfissionalEscreverReview.vue'


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
      path: '/perfil',
      name: 'perfil',
      component: PerfilProfissionalView,
    },
    {
      path: '/profissional',
      name: 'profissional',
      component: PaginaProfissionalView,
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: PaginaProfissionalReviews,
    },
    {
      path: '/review',
      name: 'review',
      component: PaginaProfissionalEscreverReview,
    }
  ],
})

export default router
