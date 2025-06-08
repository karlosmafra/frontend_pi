<script setup>
import { ref, computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
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

        <!--
        <input disabled v-model="user.name" placeholder="Nome">
        <input disabled v-model="user.role" placeholder="Profissão">
        <input disabled v-model="user.phone" placeholder="Telefone">
        <input disabled v-model="user.email" placeholder="E-mail">
        <button class="save-btn" @click="">SALVAR</button>
        -->

      </div>
      
      <div class="main">

        <div class="title">
          <h2>Perfil profissional</h2>
          <RouterLink to="/review"> <button class="excluir-btn">AVALIAR</button> </RouterLink>
        </div>

        <hr>

        <div class="container-sections">
          <div class="container-e">

            <div class="section">
              <label>Sobre Mim</label>
              <div class="div-sobre">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iusto asperiores, laborum ad saepe eius. Culpa distinctio velit eaque. Assumenda nihil culpa asperiores repellendus, provident eveniet ex ad minus! Beatae.</p>
              </div>
            </div>

            <div class="section">
              <label>Experiência Profissional</label>
              <div class="field-row">
                <div class="div-info" id="div-exp-local">
                  <p>Local</p>
                </div>
                <div class="div-info" id="div-exp-atuacao">
                  <p>Atuação</p>
                </div>
              </div>
              <!--
              <button class="add-btn" @click="addExperience">Adicionar</button>
              <div class="list">
                <div class="list-item" v-for="(exp, index) in user.experiences" :key="index">
                  {{ exp.local }} – {{ exp.funcao }} <button @click="removeExperience(index)">🗑</button>
                </div>
              </div>
              -->
            </div>

          </div>

          <div class="container-d">

            <div class="section">
              <label>Habilidades</label>
              <div class="div-skill">
                <div class="div-info" id="div-habilidade">
                  <p>Habilidade</p>
                </div>
              </div>
              <!--
              <div class="list">
                <div class="list-item" v-for="(skill, index) in user.skills" :key="index">
                  {{ skill }} <button @click="removeSkill(index)">🗑</button>
                </div>
              </div>
              -->
            </div>

            <div class="section">
              <label>Formação Acadêmica</label>
              <div class="field-row">
                <div class="div-info" id="div-edu-instituicao">
                  <p>Instituição</p>
                </div>
                <div class="div-info" id="div-edu-curso">
                  <p>Curso</p>
                </div>
              </div>
              <!--
              <button class="add-btn" @click="addEducation">Adicionar</button>
              <div class="list">
                <div class="list-item" v-for="(edu, index) in user.education" :key="index">
                  {{ edu.instituicao }} – {{ edu.curso }} <button @click="removeEducation(index)">🗑</button>
                </div>
              </div>
              -->
            </div>

          </div>

        </div>

        <div class="div-ver-avaliacoes">
          <div class="estrelas">
            <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
          </div>
          <RouterLink to="/reviews">Ver Avaliações</RouterLink>
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

    .div-sobre {
      border: 1px solid var(--cor-azul-escuro);
      padding: 10px;
      height: 180px;
      color: var(--cor-azul-escuro);
    }

    .div-info {
      width: 100%;
      padding: 10px;
      margin-top: 15px;
      margin-bottom: 20px;
      border: 1px solid var(--cor-azul-escuro);
      color: var(--cor-azul-escuro);
      font-size: 16px;
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

    .div-ver-avaliacoes {
      display: flex;
      flex-direction: column;
      align-items: end;
      justify-content: end;
      margin: 30px 60px;
    }

    .div-ver-avaliacoes a{
      color: var(--cor-laranja);
      font-size: 1.4rem;
    }

    .estrelas span{
      font-size: 1.4rem;
    }

</style>