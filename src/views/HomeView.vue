<script setup>
  import BarraNav from '@/components/BarraNav.vue';
  import BarraPesquisa from '@/components/BarraPesquisa.vue';
  import BotaoQuadrado from '@/components/BotaoQuadrado.vue';
</script>

<template>
  <BarraNav></BarraNav>
  <body>
    <div id="div-busca">
      <p>Encontre os Melhores Profissionais</p>
      <BarraPesquisa></BarraPesquisa>
      <BotaoQuadrado></BotaoQuadrado>
    </div>
  </body>
</template>

<style scoped>

  #div-busca{
    background-color: blue;
    color: white;
    text-align: center;
    padding: 20px;
  }

</style>
