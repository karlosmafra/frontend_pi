<script setup>
import AreaCadastro from '@/components/AreaCadastro.vue';
</script>

<template>

    <div class="container">
        <AreaCadastro class="area-esquerda">

        </AreaCadastro>
        <div class="area-direita">
            <img src="../assets/img/logo_azul_4.png" alt="logo_skill_match">
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
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--cor-fundo);
    }

</style>