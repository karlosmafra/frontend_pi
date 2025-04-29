<script setup>
import BarraNav from '@/components/BarraNav.vue';
import BotaoQuadrado from '@/components/BotaoQuadrado.vue';
import AreaCadastro from '@/components/AreaCadastro.vue';
</script>

<template>

    <div class="container">
        <AreaCadastro class="area-esquerda">

        </AreaCadastro>
        <div class="area-direita">
            <!-- <img src="../assets/img/logo.png" alt=""> -->
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
        flex: 4; 
    }

    .area-direita {
        flex: 5; 
        background-color: var(--cor-fundo);
    }

</style>