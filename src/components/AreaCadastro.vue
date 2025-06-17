<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue';
import BotaoQuadrado from './BotaoQuadrado.vue';

// Campos do formulário
const nome = ref('');
const telefone = ref('');
const email = ref('');
const senha = ref('');

// Controle de alertas
const sucesso = ref(false);
const erro = ref(false);
const erroMensagem = ref('');

const router = useRouter();

// Função para tratar o envio do formulário
async function enviarFormulario(role_id) {
  salvarLocalmente(role_id);
}

function salvarLocalmente(tipo) {
  if (!nome.value || !telefone.value || !email.value || !senha.value) {
    erro.value = true;
    sucesso.value = false;
    erroMensagem.value = "Preencha todos os campos.";
    return;
  }

  const user = {
    nome: nome.value,
    telefone: telefone.value,
    email: email.value,
    senha: senha.value,
    tipo: tipo
  };

  localStorage.setItem('user', JSON.stringify(user));

  sucesso.value = true;
  erro.value = false;

  setTimeout(() => {
    router.push('/home');
  }, 1500);
}
</script>

<template>
  <div id="div-cadastro">
    <form @submit.prevent="enviarFormulario" id="formulario">
      <h1>Faça seu cadastro:</h1>

      <input type="text" id="nome" placeholder="Nome" v-model="nome" required />
      <input type="text" id="telefone" placeholder="Telefone" v-model="telefone" required />
      <input type="email" id="email" placeholder="E-mail" v-model="email" required />
      <input type="password" id="senha" placeholder="Senha" v-model="senha" required />

      <!-- Alerta de sucesso -->
      <b-alert v-if="sucesso" show variant="success">
        <h4 class="alert-heading">Parabéns!</h4>
        <hr />
        <p>Cadastro realizado com sucesso.</p>
      </b-alert>

      <!-- Alerta de erro -->
      <b-alert v-if="erro" show variant="danger">{{ erroMensagem }}</b-alert>

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
}

#formulario {
  width: 77%;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

input {
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
  padding: 12px;
  border-radius: 30px;
  font-size: 1rem;
  color: var(--cor-azul-escuro);
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
