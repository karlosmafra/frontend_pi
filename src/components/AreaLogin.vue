<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
import { ref } from 'vue';
import BotaoQuadrado from './BotaoQuadrado.vue';

// Campos do formulário
const email = ref('');
const senha = ref('');

// Função para tratar o envio do formulário
async function enviarFormulario() {

  //alert("Criar função de login")
  logarLocalmente()

}

function logarLocalmente() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email.value && user.senha === senha.value) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        alert('Login bem-sucedido!');
        router.push('/home');
    } else {
        alert('E-mail ou senha incorretos!');
    }
}

</script>

<template>

    <div id="div-cadastro">

        <form @submit.prevent="enviarFormulario" id="formulario">

            <h1>Insira seu login:</h1>

            <input type="email" id="email" placeholder="E-mail" v-model="email" required />
            <input type="password" id="senha" placeholder="Senha" v-model="senha" required />

            <div id="div-enviar">
                <BotaoQuadrado type="button" :texto="'Login'" :cor="'var(--cor-laranja)'" @click="enviarFormulario()" />
            </div>

            <RouterLink to="/cadastro">Ainda não possuo uma conta</RouterLink>

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