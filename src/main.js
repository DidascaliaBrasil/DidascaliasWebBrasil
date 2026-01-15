import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Importa o arquivo de rotas que criamos

const app = createApp(App)

app.use(router) // Diz ao Vue para usar o roteador

app.mount('#app')