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
      <BarraPesquisa />
      <BotaoQuadrado :texto="'BUSCAR'" :cor="'var(--cor-laranja)'" />
    </div>
    <div>
      <div id="div-categorias">
        <h1>Categorias Populares</h1>
      </div>
    </div>
  </body>
</template>

<style scoped>

  #div-busca{
    background-color: var(--cor-azul);
    color: white;
    text-align: center;
    padding: 20px;
  }

</style>
