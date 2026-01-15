<template>
  <section class="partners-container">
    <p class="partners-title">Empresas que confiam na Didascalia</p>
    <div class="partners-grid">
      <img src="\public\img\UCM.png" alt="UCM" class="partner-logo" />
      <img src="\public\img\UAB.png" alt="UAB" class="partner-logo" />
      <img src="\public\img\Affect.png" alt="Affect" class="partner-logo" />
      <img src="\public\img\Agora.png" alt="Agora" class="partner-logo" />
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
.partners-container {
  text-align: center;
  padding: 20px;
  /* Garante que as logos fiquem suaves sobre o fundo */
  animation: fadeIn 1s ease-out;
}

.partners-title {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: #86868b;
  font-weight: 600;
  margin-bottom: 24px;
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased; /* Deixa a fonte mais nítida no Mac */
  -moz-osx-font-smoothing: grayscale;
}

.partners-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
  max-width: 600px;
  margin: 0 auto;
}

.partner-logo {
  height: 25px; /* Tamanho discreto para não roubar a cena */
  width: auto;
  filter: grayscale(100%); /* Deixa preto e branco */
  opacity: 0.4; /* Deixa suave */
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.partner-logo:hover {
  filter: grayscale(0%); /* Volta a cor original no hover */
  opacity: 1;
  transform: translateY(-2px); /* Leve movimento para cima */
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Responsividade para celulares */
@media (max-width: 480px) {
  .partners-grid {
    gap: 20px;
  }
  .partner-logo {
    height: 18px;
  }
}
</style>