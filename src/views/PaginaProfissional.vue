<script setup>
  import BarraNav from '@/components/BarraNav.vue';
  import BotaoQuadrado from '@/components/BotaoQuadrado.vue';

</script>

<template>

    <BarraNav/>

    <div class="container">
        
        <div class="area-esquerda">
            
        </div>
        <div class="area-direita">
            
        </div>
    </div>

</template>

<style scoped>

    .container {
        display: flex;
        height: 100vh;
    }

    .area-esquerda, .area-direita {
        padding: 20px;
    }

    .area-esquerda {
        flex: 1;
        background-color: var(--cor-azul);
    }

    .area-direita {
        flex: 3; 
        background-color: var(--cor-fundo);
    }

</style>