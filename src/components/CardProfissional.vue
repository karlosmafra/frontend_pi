<script setup>
import { RouterLink } from 'vue-router'
import BotaoQuadrado from './BotaoQuadrado.vue'

defineProps({
  prof: Object
})

function getInicial(nome) {
  return nome ? nome.charAt(0).toUpperCase() : '?'
}
</script>

<template>
  <div class="card">
    <div class="topo">
      <div class="dados">
        <h2 class="nome">{{ prof.nome }}</h2>
        <h3 class="funcao">{{ prof.funcao }}</h3>
      </div>
      <div class="avatar">
        <img v-if="prof.imagem" :src="prof.imagem" alt="Foto do profissional" class="foto" />
        <div v-else class="inicial">{{ getInicial(prof.nome) }}</div>
      </div>
    </div>

    <div class="estrelas">
      <span v-for="i in 5" :key="i">
        {{ i <= prof.nota ? '★' : '☆' }}
      </span>
    </div>

    <p class="clientes">+de {{ prof.clientes }} clientes satisfeitos</p>

    <RouterLink to="/profissional">
      <BotaoQuadrado class="btn-contato" :texto="'ENTRAR EM CONTATO'" :cor="'var(--cor-azul-escuro)'" />
    </RouterLink> <br>

    <RouterLink to="/profissional" class="mais-info">Mais informações</RouterLink>
  </div>
</template>

<style scoped>
.card {
  width: 350px;
  background: var(--cor-azul);
  color: white;
  padding: 24px;
  text-align: left;
  border-radius: 4px;
}

.topo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  margin-bottom: 16px;
}

.dados {
  flex: 1;
}

.nome {
  font-size: 1.3rem;
  margin: 0;
}

.funcao {
  font-size: 1rem;
  margin: 4px 0 0;
}

.avatar {
  width: 70px;
  height: 70px;
  margin-left: 12px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #f98e45;
  display: flex;
  align-items: center;
  justify-content: left;
}

.foto {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid white;
}

.inicial {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}

.estrelas {
  margin-bottom: 12px;
  font-size: 2rem;
  color: var(--cor-laranja);
}

.clientes {
  font-size: 0.9rem;
  margin-bottom: 12px;
}

.btn-contato {
  width: 80%;
  height: 40px;
  margin: 8px 0;
  font-size: 1rem;
}

.mais-info {
  color: white;
  font-size: 0.8rem;
  text-decoration: underline;
}
</style>
