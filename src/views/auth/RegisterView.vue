<template>
  <div class="auth-wrapper">
    <div class="auth-card">
      <header class="auth-header">
        <div class="logo-placeholder">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="black"/>
            <path d="M2 17L12 22L22 17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <h1>Criar seu ID</h1>
        <p>Apenas uma conta para todos os serviços Didascalia.</p>
      </header>

      <form @submit.prevent="handleRegister" class="auth-form">
        <div class="input-group">
          <input 
            type="text" 
            v-model="name" 
            placeholder="Nome completo" 
            required 
          />
        </div>

        <div class="input-group">
          <input 
            type="email" 
            v-model="email" 
            placeholder="E-mail" 
            required 
          />
        </div>
        
        <div class="input-group">
          <input 
            type="password" 
            v-model="password" 
            placeholder="Senha" 
            required 
          />
        </div>

        <div class="input-group">
          <input 
            type="password" 
            v-model="confirmPassword" 
            placeholder="Confirmar Senha" 
            required 
          />
        </div>

        <button type="submit" class="btn-primary">
          Cadastrar
          <span class="arrow">→</span>
        </button>
      </form>

      <footer class="auth-footer">
        <p>Já possui um ID? <router-link to="/login">Inicie sessão aqui.</router-link></p>
      </footer>
    </div>
  </div>
  <PartnersSection />
</template>

<script setup>
import { ref } from 'vue';
import { auth } from '@/firebase'; // Importa a config que criamos
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';
import PartnersSection from '@/components/PartnersSection.vue';

const name = ref(''); // Você pode salvar o nome no Firestore depois
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const router = useRouter();

const handleRegister = async () => {
  if (password.value !== confirmPassword.value) {
    alert("As senhas não coincidem!");
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    alert("Conta criada com sucesso!");
    router.push('/login');
  } catch (error) {
    alert("Erro ao cadastrar: " + error.message);
  }
};
</script>

<style scoped>
/* Base de estilo idêntica ao Login para manter o padrão */
.auth-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 80vh;
  background-color: #f5f5f7;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

.auth-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  padding: 40px;
  border-radius: 28px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.auth-header h1 {
  font-size: 24px;
  font-weight: 600;
  color: #1d1d1f;
  margin-top: 20px;
  margin-bottom: 8px;
}

.auth-header p {
  font-size: 14px;
  color: #86868b;
  margin-bottom: 32px;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

input {
  width: 100%;
  padding: 16px;
  border: 1px solid #d2d2d7;
  border-radius: 12px;
  font-size: 16px;
  background-color: #ffffff;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

input:focus {
  outline: none;
  border-color: #0071e3;
  box-shadow: 0 0 0 4px rgba(0, 113, 227, 0.1);
}

.btn-primary {
  background-color: #0071e3;
  color: white;
  border: none;
  padding: 16px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  transition: background-color 0.2s ease;
}

.btn-primary:hover {
  background-color: #0077ed;
}

.btn-primary:active {
  transform: scale(0.98);
}

.auth-footer {
  margin-top: 24px;
  font-size: 14px;
}

.auth-footer a {
  color: #0066cc;
  text-decoration: none;
}
</style>