<script setup>
import { ref } from 'vue';

const props = defineProps({
    nome: String,
    texto: String
}) 

</script>

<template>

    <div class="review">
        <div class="estrelas">
         <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
        </div>
        <h1>{{ props.nome }}</h1>
        <p>{{ props.texto }}</p>
    </div>

</template>

<style scoped>

    h1 {
        font-size: 1.3rem;
        color: var(--cor-azul-escuro);
        margin: 5px 0px;
    }

    p {
        font-size: 1.2rem;
        font-weight: normal;
        color: var(--cor-azul-escuro);
        margin: 5px 0px;
    }

</style>