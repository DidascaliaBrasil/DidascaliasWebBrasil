import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/auth/LoginView.vue'
import RegisterView from '../views/auth/RegisterView.vue'

const router = createRouter({
  // Define o histórico do navegador (para o botão 'voltar' funcionar)
  history: createWebHistory(import.meta.env.BASE_URL),
  
  // 2. Mapeie os caminhos (paths) para os componentes
  routes: [
    {
      path: '/login',      // O que aparece na URL
      name: 'login',       // Um nome interno para facilitar chamadas
      component: LoginView // O arquivo que será carregado
    },
    {
      path: '/cadastro',
      name: 'register',
      component: RegisterView
    }
  ]
})

export default router