<script setup>
import { ref, computed, onMounted } from 'vue'
import BarraNav from './BarraNav.vue'
import BotaoQuadrado from './BotaoQuadrado.vue'
import router from '@/router'

// Campos do formulário
const review = ref('')
const nota = ref(0)
const hover = ref(0)

// Alerta visual
const alertMessage = ref('')
const alertType = ref('') // 'success' ou 'error'

function showAlert(msg, type = 'success') {
  alertMessage.value = msg
  alertType.value = type
  setTimeout(() => {
    alertMessage.value = ''
  }, 5000)
}

// Dados do usuário
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

function enviarReview() {
  if (review.value.length > 1000) {
    showAlert('A avaliação deve ter no máximo 1000 caracteres.', 'error')
    return
  }

  if (nota.value === 0) {
    showAlert('Por favor, selecione uma quantidade de estrelas.', 'error')
    return
  }

  showAlert('Avaliação enviada com sucesso!', 'success')
  setTimeout(() => {
    router.push('/reviews')
  }, 1500)
}
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
          <p>Juliana Maria</p>
        </div>
        <div class="sidebar-info">
          <p>Engenheira</p>
        </div>
        <div class="sidebar-info">
          <p>61999999999</p>
        </div>
        <div class="sidebar-info">
          <p>juliana.maria@email.com</p>
        </div>
        <button class="save-btn" @click="">ENVIAR MENSAGEM</button>

      </div>
      
      <div class="main">
      <div v-if="alertMessage" class="alert-custom" :class="alertType">
      {{ alertMessage }}
        </div>
        <div class="title">
          <h2>Avaliar</h2>
          <RouterLink to="/profissional"> <button class="excluir-btn">VOLTAR</button> </RouterLink>
        </div>

        <hr>

        <div class="body">
          
          <textarea v-model="review" name="area_review" id="area_review"></textarea>

          <div class="bottom">

            <div class="div-estrelas">
              <p>Selecione a quantidade de estrelas:</p>
              <div class="estrelas">
                <span
                  v-for="estrela in 5"
                  :key="estrela"
                  @click="nota = estrela"
                  @mouseover="hover = estrela"
                  @mouseleave="hover = 0"
                  class="estrela"
                >
                  {{ estrela <= (hover || nota) ? '★' : '☆' }}
                </span>
              </div>
            </div>

            <div class="div-botao">
              <button type="button" @click="enviarReview">Enviar</button>
            </div>

          </div>

        </div>

      </div>
    </div>

</template>

<style scoped>
.alert-custom {
  padding: 12px;
  border-radius: 8px;
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
}

.alert-custom.success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.alert-custom.error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

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

    .estrelas {
      font-size: 2rem;
      color: var(--cor-laranja);
      cursor: pointer;
    }

    .estrela {
      transition: transform 0.2s;
    }

    .estrela:hover {
      transform: scale(1.1);
    }

</style>
