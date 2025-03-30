<script setup>
    import BarraNav from '@/components/BarraNav.vue';
    import ListaProfissionais from '@/components/ListaProfissionais.vue';
</script>


<template>
  
    <BarraNav/>

    <div id="div-profissionais">
        <h1>Profissionais em Destaque perto de você</h1>
        <div id="div-profissionais-cards">
            <ListaProfissionais />
        </div>
  </div>

</template>


<style scoped>

    #div-profissionais{
        max-width: 1500px; 
        margin: auto;
    }

    /*
    #div-profissionais-cards{
        max-width: 99%;
    }
    */

    #div-profissionais h1{
        color: var(--cor-azul-escuro);
        margin-top: 50px;
        margin-bottom: 25px;
    }

</style>
