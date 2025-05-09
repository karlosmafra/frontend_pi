<script setup>

import { ref } from 'vue';
import BotaoQuadrado from './BotaoQuadrado.vue';

// Campos do formulário
const nome = ref('');
const telefone = ref('');
const email = ref('');
const senha = ref('');

// Função para tratar o envio do formulário
function enviarFormulario() {
  console.log('Nome:', nome.value);
  console.log('Telefone:', telefone.value);
  console.log('Email:', email.value);
  console.log('Senha:', senha.value);
  alert('Formulário enviado');
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

            <h2>Selecione:</h2>
            <div id="div-enviar">
                <BotaoQuadrado type="submit" :texto="'Cliente'" :cor="'var(--cor-laranja)'" />
                <BotaoQuadrado type="submit" :texto="'Prestador de Serviço'" :cor="'var(--cor-laranja)'" />
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