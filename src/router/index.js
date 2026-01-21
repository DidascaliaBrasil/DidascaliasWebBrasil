// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/auth/LoginView.vue'
import RegisterView from '../views/auth/RegisterView.vue'
import HomeView from '@/views/auth/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login' // Redireciona a tela branca para o login
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/cadastro',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router