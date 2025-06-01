<script setup>
import { ref } from 'vue';

const props = defineProps({
    texto: String,
    cor: {
        type: String,
        default: "var(--cor-laranja)"
    }
}) 

</script>

<template>
    <button>{{props.texto}}</button>
</template>

<style scoped>

    button{
        border-radius: 0px;
        border: 0px;
        padding: 5px;
        color: #ffffff;
        background-color: v-bind(cor);
        text-decoration: none;
    }

    button:hover {
        text-decoration: underline 2px;
    }

</style>