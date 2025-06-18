<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue';
import BotaoQuadrado from './BotaoQuadrado.vue';

const router = useRouter()

// Campos do formulário
const email = ref('');
const senha = ref('');

// Alert state
const alertMessage = ref('');
const alertType = ref(''); // 'success' or 'error'

// Exibe alerta customizado
function showAlert(msg, type = 'success') {
  alertMessage.value = msg;
  alertType.value = type;
  setTimeout(() => {
    alertMessage.value = '';
  }, 3000);
}

// Função para tratar o envio do formulário
async function enviarFormulario() {
  logarLocalmente()
}

function logarLocalmente() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.email === email.value && user.senha === senha.value) {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    showAlert('Login bem-sucedido!', 'success');
    router.push('/home');
  } else {
    showAlert('E-mail ou senha incorretos!', 'error');
  }
}
</script>

<template>
  <div id="div-cadastro">
    <form @submit.prevent="enviarFormulario" id="formulario">
      <h1>Insira seu login:</h1>

      <!-- Alerta customizado -->
      <div
        v-if="alertMessage"
        class="alert-custom"
        :class="alertType"
      >
        {{ alertMessage }}
      </div>

      <input
        type="email"
        id="email"
        placeholder="E-mail"
        v-model="email"
        required
      />
      <input
        type="password"
        id="senha"
        placeholder="Senha"
        v-model="senha"
        required
      />

      <div id="div-enviar">
        <BotaoQuadrado
          type="button"
          :texto="'Login'"
          :cor="'var(--cor-laranja)'"
          @click="enviarFormulario"
        />
      </div>

      <RouterLink to="/cadastro">
        Ainda não possuo uma conta
      </RouterLink>
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
  justify-content: center;
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
