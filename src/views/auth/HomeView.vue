<template>
  <div class="home-wrapper">
    <nav class="top-nav">
      <img src="/img/Didascalias.png" alt="Logo" class="nav-logo" />
      <div class="nav-links">
        <button @click="handleLogout" class="btn-secondary">Sair</button>
      </div>
    </nav>

    <main class="content-container">
      <header class="welcome-header">
        <h1>Bem-vindo ao Didascalia</h1>
        <p>Sua central de gestão e produtividade.</p>
      </header>

      <div class="features-grid">
        <div class="feature-card">
          <div class="icon-box"><IconDocumentation /></div>
          <h3>Documentação</h3>
          <p>Acesse guias e tutoriais completos do sistema.</p>
        </div>

        <div class="feature-card">
          <div class="icon-box"><IconCommunity /></div>
          <h3>Comunidade</h3>
          <p>Troque experiências com outros usuários.</p>
        </div>

        <div class="feature-card">
          <div class="icon-box"><IconEcosystem /></div>
          <h3>Ecossistema</h3>
          <p>Explore as ferramentas integradas ao Didascalia.</p>
        </div>

        <div class="feature-card">
          <div class="icon-box"><IconSupport /></div>
          <h3>Suporte</h3>
          <p>Precisa de ajuda? Nossa equipe está à disposição.</p>
        </div>
      </div>
    </main>

    <PartnersSection />
  </div>
</template>

<script setup>
import { auth } from '@/firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';
import PartnersSection from '@/components/PartnersSection.vue';
import IconDocumentation from '@/components/icons/IconDocumentation.vue';
import IconCommunity from '@/components/icons/IconCommunity.vue';
import IconEcosystem from '@/components/icons/IconEcosystem.vue';
import IconSupport from '@/components/icons/IconSupport.vue';

const router = useRouter();

const handleLogout = async () => {
  try {
    await signOut(auth);
    router.push('/login');
  } catch (error) {
    console.error("Erro ao sair:", error);
  }
};
</script>

<style scoped>
.home-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

.top-nav {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 15px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  z-index: 100;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.nav-logo {
  height: 70px;
  margin-left: 20px;
}

.content-container {
  max-width: 1000px;
  width: 90%;
  text-align: center;
  margin-bottom: 60px;
}

.welcome-header h1 {
  font-size: 42px;
  font-weight: 700;
  color: #1d1d1f;
  margin-bottom: 10px;
}

.welcome-header p {
  font-size: 20px;
  color: #86868b;
  margin-bottom: 50px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
  margin-top: 20px;
}

.feature-card {
  background: white;
  padding: 30px;
  border-radius: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  transition: transform 0.3s ease;
  cursor: pointer;
  border: 1px solid #f2f2f7;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.icon-box {
  color: #0071e3;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}

.feature-card h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
}

.feature-card p {
  font-size: 14px;
  color: #86868b;
  line-height: 1.5;
}

.btn-secondary {
  background-color: transparent;
  color: #0071e3;
  border: 1px solid #0071e3;
  padding: 8px 16px;
  border-radius: 20px;
  margin-right: 20px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
}

.btn-secondary:hover {
  background-color: #0071e3;
  color: white;
}
</style>