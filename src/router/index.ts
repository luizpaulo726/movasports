import { createRouter, createWebHistory } from 'vue-router'
import CadastrarAtleta from '@/views/cadastrarAtleta.vue'
import Home from '@/views/home.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/cadastro-atleta', name: 'CadastrarAtleta', component: CadastrarAtleta },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
