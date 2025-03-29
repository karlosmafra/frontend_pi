<script setup>
  import BarraNav from '@/components/BarraNav.vue';
  import AreaPesquisa from '@/components/AreaPesquisa.vue';
  import BotaoQuadrado from '@/components/BotaoQuadrado.vue';

  const categorias = ["Pedreiro", "Eletricista", "Pintor", "Encanador", "Jardineiro", "Mecânico", "Carpinteiro", "Gesseiro"];

</script>

<template>
  <BarraNav/>

  <AreaPesquisa/>
  
  <div id="div-categorias">
    <h1>Categorias Populares</h1>
    <div id="div-categorias-botoes">
      <BotaoQuadrado class="btn-categoria" v-for="(categoria, index) in categorias" :key="index" :texto="categoria" :cor="'var(--cor-azul-escuro)'" />
    </div>
  </div>
</template>

<style scoped>

  #div-categorias{
    max-width: 1500px; 
    margin: auto;
  }

  #div-categorias h1{
    color: var(--cor-azul-escuro);
    margin-bottom: 25px;
  }

  #div-categorias-botoes {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 60px;
    justify-content: center;
    place-items: center;
  }

  @media (max-width: 1080px) {
    #div-categorias-botoes {
      grid-template-columns: repeat(4, 1fr);
      gap: 30px;
    }
  }

  @media (max-width: 768px) {
    #div-categorias-botoes {
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }
  }

  @media (max-width: 480px) {
    #div-categorias-botoes {
      grid-template-columns: repeat(1, 1fr);
      gap: 15px;
    }
  }

  #div-categorias-botoes button {
    aspect-ratio: 7 / 2;
    width: 100%; 
    min-width: 150px; 
    max-width: 320px;
    font-size: 2rem;
  }

</style>
