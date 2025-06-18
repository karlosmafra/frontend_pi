<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import BotaoQuadrado from './BotaoQuadrado.vue'

// Campos do formulário
const nome = ref('')
const telefone = ref('')
const email = ref('')
const senha = ref('')

// Estado de alerta
const alertMessage = ref('')
const alertType = ref('') // 'success' ou 'error'

const router = useRouter()

// Exibe alerta customizado
function showAlert(msg, type = 'success') {
  alertMessage.value = msg
  alertType.value = type
  setTimeout(() => {
    alertMessage.value = ''
  }, 3000)
}

// Função para tratar o envio do formulário
async function enviarFormulario(role_id) {
  salvarLocalmente(role_id)
}

function salvarLocalmente(tipo) {
  if (!nome.value || !telefone.value || !email.value || !senha.value) {
    showAlert('Preencha todos os campos.', 'error')
    return
  }

  const user = {
    nome: nome.value,
    telefone: telefone.value,
    email: email.value,
    senha: senha.value,
    tipo: tipo
  }

  localStorage.setItem('user', JSON.stringify(user))
  showAlert('Cadastro realizado com sucesso.', 'success')
  setTimeout(() => {
    router.push('/home')
  }, 1500)
}
</script>

<template>
  <div id="div-cadastro">
    <form @submit.prevent="enviarFormulario" id="formulario">
      <h1>Faça seu cadastro:</h1>

      <!-- Alerta customizado -->
      <div
        v-if="alertMessage"
        class="alert-custom"
        :class="alertType"
      >
        {{ alertMessage }}
      </div>

      <input type="text" id="nome" placeholder="Nome" v-model="nome" required />
      <input type="text" id="telefone" placeholder="Telefone" v-model="telefone" required />
      <input type="email" id="email" placeholder="E-mail" v-model="email" required />
      <input type="password" id="senha" placeholder="Senha" v-model="senha" required />

      <h2>Selecione:</h2>
      <div id="div-enviar">
        <BotaoQuadrado type="button" :texto="'Cliente'" :cor="'var(--cor-laranja)'" @click="enviarFormulario('cliente')" />
        <BotaoQuadrado type="button" :texto="'Prestador de Serviço'" :cor="'var(--cor-laranja)'" @click="enviarFormulario('prestador')" />
      </div>

      <RouterLink to="/">Já tenho uma conta</RouterLink>
    </form>
  </div>
</template>

<style scoped>
#div-cadastro {
  background-color: var(--cor-azul-escuro);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

#formulario {
  width: 77%;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
}

.alert-custom {
  padding: 12px;
  border-radius: 8px;
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
}

.alert-custom.success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.alert-custom.error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

input {
  margin: 0;
  padding: 12px;
  border-radius: 30px;
  font-size: 1rem;
  color: var(--cor-azul-escuro);
  border: none;
}

#div-enviar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  padding: 12px;
  font-size: 1.5rem;
  width: 47%;
}

h1, h2 {
  color: white;
  font-size: 1.9rem;
}

a {
  text-align: center;
  color: white;
  font-size: 1.2rem;
  margin: 40px 0px;
}
</style>
