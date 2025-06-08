<script setup>
import { ref, computed, onMounted } from 'vue'
import BarraNav from './BarraNav.vue'
import Review from './Review.vue'
import BotaoQuadrado from './BotaoQuadrado.vue'

const user = ref({
  name: '',
  role: '',
  phone: '',
  email: '',
  about: '',
  image: null,
  skills: [],
  experiences: [],
  education: []
})

const initials = computed(() => {
  return user.value.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
})

onMounted(() => {
  const saved = localStorage.getItem('perfil')
  if (saved) {
    user.value = JSON.parse(saved)
  }
})

</script>


<template>

    <BarraNav/>

    <div class="container">
    
      <div class="sidebar">
        <label for="upload">
          <div class="profile-pic" :style="{ backgroundImage: user.image ? 'url(' + user.image + ')' : '', backgroundSize: 'cover' }">
            <span v-if="!user.image">{{ initials }}</span>
          </div>
        </label>

        <div class="sidebar-info">
          <p>Nome</p>
        </div>
        <div class="sidebar-info">
          <p>Profissão</p>
        </div>
        <div class="sidebar-info">
          <p>Telefone</p>
        </div>
        <div class="sidebar-info">
          <p>E-mail</p>
        </div>
        <button class="save-btn" @click="">ENVIAR MENSAGEM</button>

      </div>
      
      <div class="main">

        <div class="title">
          <h2>Avaliar</h2>
          <RouterLink to="/profissional"> <button class="excluir-btn">VOLTAR</button> </RouterLink>
        </div>

        <hr>

        <div class="body">
          
          <textarea name="area_review" id="area_review"></textarea>
          <div class="bottom">
            <div class="div-estrelas">
              <p>
                Selecione a quantidade de estrelas:
              </p>
            </div>
            <div class="div-botao">
              <BotaoQuadrado :texto="'Salvar'" :cor="'var(--cor-laranja)'"/>
            </div>
          </div>

        </div>

      </div>
    </div>

</template>

<style scoped>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: 'Open Sans', sans-serif;
      background-color: #fff8ee;
    }

    hr {
      height: 4px;
      background-color: var(--cor-laranja);
      border: none;
    }

    .container {
      display: flex;
    }

    .container-sections {
      display: flex;
      padding: 10px;
    }

    .container-e, .container-d {
      padding: 10px 80px;
      flex: 1;
    }

    .sidebar {
      height: 87.5vh;
      width: 20%;
      background-color: var(--cor-azul);
      padding: 20px;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }

    .profile-pic {
      width: 260px;
      height: 260px;
      background-color: #ff7a32;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 80px;
      font-weight: bold;
      color: white;
      margin-bottom: 15px;
      position: relative;
      border: 4px solid white;
      overflow: hidden;
      cursor: pointer;
    }

    input[type='file'] {
      display: none;
    }

    .main {
      flex: 1;
    }

    h2 {
      color: #f47920;
      margin-top: 0;
      font-size: 1.8rem;
    }

    .title {
      display: flex;
      justify-content: space-between;
      padding: 30px 50px 30px 67px;
    }

    label {
      font-weight: bold;
      font-size: 1.7rem;
      color: #f47920;
      display: block;
      margin: 20px 0px;
    }

    .div-skill {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .field-row {
      gap: 20px;
    }

    .field-row input {
      flex: 1;
    }

    button {
      background-color: var(--cor-laranja);
      color: white;
      border: none;
      padding: 10px 15px;
      font-size: 16px;
      cursor: pointer;
    }

    .main button {
      background-color: var(--cor-azul-escuro);
    }

    .add-btn {
      margin-top: -20px;
    }

    .save-btn {
      width: 100%;
      margin-top: 20px;
    }

    .excluir-btn {
      background-color: #004f61;
    }

    .sidebar-info {
      background-color: transparent;
      color: white;
      margin-bottom: 15px;
      padding: 8px;
      border: none;
      border-bottom: 2px solid white;
      width: 100%;
    }

    .body {
      padding: 60px
    }

    textarea {
      width: 100%;
      height: 200px;
      padding: 10px;
      border: 2px solid var(--cor-azul-escuro);
      margin-bottom: 25px;
      margin-top: 10px;
      font-size: 16px;
      background-color: transparent;
      color: var(--cor-azul-escuro);
    }

    .bottom {
      display: flex;
      justify-content: space-between;
    }

    .body p {
      color: var(--cor-azul-escuro);
    }

</style>