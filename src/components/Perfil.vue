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
        <h2>Complete seu perfil profissional</h2>

        <button class="excluir-btn" @click="excluirConta">EXCLUIR CONTA</button>

        <div class="section">
          <label>Sobre Mim</label>
          <textarea v-model="user.about" rows="4"></textarea>
        </div>

        <div class="section">
          <label>Habilidades</label>
          <input v-model="newSkill" @keyup.enter="addSkill">
          <button class="add-btn" @click="addSkill">+</button>
          <div class="list">
            <div class="list-item" v-for="(skill, index) in user.skills" :key="index">
              {{ skill }} <button @click="removeSkill(index)">🗑</button>
            </div>
          </div>
        </div>

        <div class="section">
          <label>Experiência Profissional</label>
          <div class="field-row">
            <input v-model="newExperience.local" placeholder="Local">
            <input v-model="newExperience.funcao" placeholder="Atuação">
          </div>
          <button class="add-btn" @click="addExperience">Adicionar mais</button>
          <div class="list">
            <div class="list-item" v-for="(exp, index) in user.experiences" :key="index">
              {{ exp.local }} – {{ exp.funcao }} <button @click="removeExperience(index)">🗑</button>
            </div>
          </div>
        </div>

        <div class="section">
          <label>Formação Acadêmica</label>
          <div class="field-row">
            <input v-model="newEducation.instituicao" placeholder="Instituição">
            <input v-model="newEducation.curso" placeholder="Curso">
          </div>
          <button class="add-btn" @click="addEducation">Adicionar mais</button>
          <div class="list">
            <div class="list-item" v-for="(edu, index) in user.education" :key="index">
              {{ edu.instituicao }} – {{ edu.curso }} <button @click="removeEducation(index)">🗑</button>
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

    .top-bar {
      background-color: #007a99;
      padding: 15px 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: white;
    }

    .top-bar h1 {
      margin: 0;
      font-size: 24px;
    }

    .container {
      display: flex;
    }

    .sidebar {
      width: 280px;
      background-color: #007a99;
      padding: 20px;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .profile-pic {
      width: 230px;
      height: 230px;
      background-color: #ff7a32;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 80px;
      font-weight: bold;
      color: white;
      margin-bottom: 15px;
      position: relative;
      border-radius: 4px;
      overflow: hidden;
      cursor: pointer;
    }

    input[type='file'] {
      display: none;
    }

    .sidebar input {
      margin-bottom: 10px;
      padding: 8px;
      border: none;
      border-radius: 4px;
      width: 100%;
    }

    .main {
      flex: 1;
      padding: 30px;
    }

    h2 {
      color: #f47920;
      margin-top: 0;
    }

    label {
      font-weight: bold;
      color: #f47920;
      display: block;
      margin-top: 10px;
    }

    input, textarea {
      width: 100%;
      padding: 10px;
      margin-top: 5px;
      margin-bottom: 15px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 16px;
    }

    .field-row {
      display: flex;
      gap: 10px;
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
      background-color: white;
      border: 1px solid #007a99;
      padding: 8px;
      border-radius: 4px;
      margin-bottom: 5px;
    }

    .list-item button {
      background: none;
      border: none;
      color: #007a99;
      font-size: 16px;
      cursor: pointer;
    }

    button {
      background-color: #f47920;
      color: white;
      border: none;
      padding: 10px 15px;
      font-size: 16px;
      cursor: pointer;
      border-radius: 4px;
    }

    .add-btn {
      margin-top: -10px;
      margin-bottom: 20px;
    }

    .save-btn {
      width: 100%;
      margin-top: 20px;
    }

    .excluir-btn {
      background-color: #004f61;
      float: right;
      margin-top: -60px;
      margin-bottom: 20px;
    }
</style>