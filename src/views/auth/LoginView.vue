<template>
  <div class="auth-wrapper">
    <div class="auth-card">
      <header class="auth-header">
        <div class="logo-placeholder">
          <img src="/public/img/Didascalias.png" alt="Agora" class="partner-logo" />
        </div>
        <h1>Iniciar sessão</h1>
        <p>Use seu ID da Didascalia para continuar.</p>
      </header>

      <form @submit.prevent="handleLogin" class="auth-form">
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

        <button type="submit" class="btn-primary">
          Continuar
          <span class="arrow">→</span>
        </button>
      </form>

      <footer class="auth-footer">
        <p>Não tem um ID? <router-link to="/cadastro">Crie o seu agora.</router-link></p>
      </footer>
    </div>
  </div>
  <PartnersSection />
</template>

<script setup>
import { ref } from 'vue';
import { auth } from '@/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';
import PartnersSection from '@/components/PartnersSection.vue';

const email = ref('');
const password = ref('');
const router = useRouter();

const handleLogin = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    console.log('Login realizado com sucesso!');
    router.push('/home'); // Redireciona para a home
  } catch (error) {
    alert("Falha no login: " + error.message);
  }
};
</script>

<style scoped>
/* 1. Background com degradê suave */
.auth-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

/* 2. Card Minimalista */
.auth-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px); /* Efeito de vidro (Glassmorphism) */
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

/* 3. Inputs Inputs sem bordas pesadas */
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

/* 4. Botão Principal */
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
  color: #1d1d1f;
}

.auth-footer a {
  color: #0066cc;
  text-decoration: none;
}

.auth-footer a:hover {
  text-decoration: underline;
}

.partner-logo {
  height: 10vh; /* Tamanho discreto para não roubar a cena */
  width: auto;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>