<script setup>

</script>


<template>

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

</template>


<style scoped>

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

</style>