<script setup>
import { RouterLink } from 'vue-router';
import BotaoQuadrado from './BotaoQuadrado.vue';

defineProps({
  prof: Object
});

</script>

<template>

  <div class="card">
    <div class="nome-foto">
      <div class="nome">
        <h2 id="card-nome">{{ prof.nome }}</h2>
        <h3 id="card-funcao">{{ prof.funcao }}</h3>
      </div>
      <div class="foto">
        <img v-if="prof.imagem" :src="prof.imagem" alt="Foto do profissional" id="card-img">
      </div>
    </div>
    <div class="reviews-links">
        <p>clientes satisfeitos</p>
        <BotaoQuadrado class="btn-contato" :texto="'ENTRAR EM CONTATO'" :cor="'var(--cor-azul-escuro)'"/> <br>
        <RouterLink to="/profissional">Mais informações</RouterLink>
    </div>
  </div>

</template>

<style scoped>

.card {
  width: 100%;
  max-width: 350px;
  background: var(--cor-azul);
  color: white;
  padding: 24px;
  text-align: center;
}

.nome-foto {
    display: flex;
    justify-content: space-between;
    text-align: left;
}

.reviews-links {
    text-align: left;
}

#card-img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

#card-nome {
  font-size: 1.3rem;
}

#card-funcao {
  font-size: 1.1rem;
  margin-bottom: 10px;
}

.reviews-links p {
    font-size: 0.9rem;
}

.btn-contato {
    aspect-ratio: 7 / 1;
    width: 75%;
    margin: 5px 0px;
}

.reviews-links a {
    color: white;
    font-size: 0.8rem;
}

</style>
