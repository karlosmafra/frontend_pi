<script setup>
import { ref, computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import BarraNav from './BarraNav.vue'
import Review from './Review.vue'

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
          <h2>Avaliações</h2>
          <RouterLink to="/review"> <button class="excluir-btn">AVALIAR</button> </RouterLink>
        </div>

        <hr>

        <div class="div-reviews">
          
          <Review class="review" :nome="'Carolina Siqueira'" :texto="'Tive um problema sério com a rescisão do meu contrato de trabalho, e o Dr. Vitor me orientou de forma clara e eficiente. Graças a ele, consegui um acordo justo!'"/>

          <Review class="review" :nome="'Ricardo Lemos'" :texto="'Atendimento impecável! Sempre disponível para tirar dúvidas e muito transparente em todas as etapas do processo.'"/>

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

    .div-reviews {
      padding: 40px 70px;
      max-width: 75%;
    }

    .review {
      margin-bottom: 40px;
    }

</style>