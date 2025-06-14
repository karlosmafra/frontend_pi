<script setup>
import { ref, computed, onMounted } from 'vue'
import BarraNav from './BarraNav.vue'

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

const newSkill = ref('')
const newExperience = ref({ local: '', funcao: '' })
const newEducation = ref({ instituicao: '', curso: '' })

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

function uploadImage(event) {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = e => {
      user.value.image = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

function addSkill() {
  if (newSkill.value.trim()) {
    user.value.skills.push(newSkill.value.trim())
    newSkill.value = ''
  }
}

function removeSkill(index) {
  user.value.skills.splice(index, 1)
}

function addExperience() {
  const { local, funcao } = newExperience.value
  if (local && funcao) {
    user.value.experiences.push({ ...newExperience.value })
    newExperience.value.local = ''
    newExperience.value.funcao = ''
  }
}

function removeExperience(index) {
  user.value.experiences.splice(index, 1)
}

function addEducation() {
  const { instituicao, curso } = newEducation.value
  if (instituicao && curso) {
    user.value.education.push({ ...newEducation.value })
    newEducation.value.instituicao = ''
    newEducation.value.curso = ''
  }
}

function removeEducation(index) {
  user.value.education.splice(index, 1)
}

function saveProfile() {
  localStorage.setItem('perfil', JSON.stringify(user.value))
  alert('Perfil salvo com sucesso!')
}

function excluirConta() {
  if (confirm('Tem certeza que deseja excluir sua conta?')) {
    localStorage.removeItem('perfil')
    location.reload()
  }
}
</script>


<template>

    <BarraNav/>

    <div class="container">
    
      <div class="sidebar">
        <label for="upload">
          <div class="profile-pic" :style="{ backgroundImage: user.image ? 'url(' + user.image + ')' : '', backgroundSize: 'cover' }">
            <span v-if="!user.image">{{ initials }}</span>
            <input type="file" id="upload" @change="uploadImage">
          </div>
        </label>

        <input v-model="user.name" placeholder="Nome">
        <input v-model="user.role" placeholder="Profissão">
        <input v-model="user.phone" placeholder="Telefone">
        <input v-model="user.email" placeholder="E-mail">
        <button class="save-btn" @click="saveProfile">SALVAR</button>
      </div>
      
      <div class="main">

        <div class="title">
          <h2>Complete seu perfil profissional</h2>
          <button class="excluir-btn" @click="excluirConta">EXCLUIR CONTA</button>
        </div>

        <hr>

        <div class="container-sections">
          <div class="container-e">

            <div class="section">
              <label>Sobre Mim</label>
              <textarea v-model="user.about" rows="4"></textarea>
            </div>

            <div class="section">
              <label>Experiência Profissional</label>
              <div class="field-row">
                <input v-model="newExperience.local" placeholder="Local">
                <input v-model="newExperience.funcao" placeholder="Atuação">
              </div>
              <button class="add-btn" @click="addExperience">Adicionar</button>
              <div class="list">
                <div class="list-item" v-for="(exp, index) in user.experiences" :key="index">
                  {{ exp.local }} – {{ exp.funcao }} <button @click="removeExperience(index)">🗑</button>
                </div>
              </div>
            </div>

          </div>

          <div class="container-d">

            <div class="section">
              <label>Habilidades</label>
              <div class="div-skill">
              <input v-model="newSkill" @keyup.enter="addSkill">
              <button class="add-btn" @click="addSkill">+</button>
              </div>
              <div class="list">
                <div class="list-item" v-for="(skill, index) in user.skills" :key="index">
                  {{ skill }} <button @click="removeSkill(index)">🗑</button>
                </div>
              </div>
            </div>

            <div class="section">
              <label>Formação Acadêmica</label>
              <div class="field-row">
                <input v-model="newEducation.instituicao" placeholder="Instituição">
                <input v-model="newEducation.curso" placeholder="Curso">
              </div>
              <button class="add-btn" @click="addEducation">Adicionar</button>
              <div class="list">
                <div class="list-item" v-for="(edu, index) in user.education" :key="index">
                  {{ edu.instituicao }} – {{ edu.curso }} <button @click="removeEducation(index)">🗑</button>
                </div>
              </div>
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

    .sidebar input {
      background-color: transparent;
      color: white;
      margin-bottom: 15px;
      padding: 8px;
      border: none;
      border-bottom: 2px solid white;
      width: 100%;
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

    input, textarea {
      width: 100%;
      padding: 10px;
      margin-top: 10px;
      margin-bottom: 15px;
      border: 1px solid #ccc;
      font-size: 16px;
    }

    .main input, textarea {
      background-color: transparent;
      color: var(--cor-azul-escuro);
      border: 1px solid var(--cor-azul-escuro);
      margin-bottom: 25px;
      height: 50px;
    }

    .div-skill {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    textarea {
      height: 180px;
    }

    .field-row {
      gap: 20px;
    }

    .field-row input {
      flex: 1;
    }

    .list {
      margin-bottom: 10px;
    }

    .list-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: transparent;
      color: var(--cor-azul-escuro);
      border: 1px solid var(--cor-azul-escuro);
      padding-left: 10px;
      margin: 10px 0px;
    }

    .list-item button {
      background: none;
      border: none;
      color: #007a99;
      font-size: 16px;
      cursor: pointer;
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
</style>