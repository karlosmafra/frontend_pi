<script setup>
    import { RouterLink } from 'vue-router'
    import Logo from '@/assets/img/logo_branca_16.png'
</script>

<template>
    
    <nav>
         <div class="container" id="container-img">
           <img :src="Logo" alt="Logo" height="70px">
         </div>
        <div class="container" id="container-links">
            <RouterLink to="/home">Home</RouterLink>
            <RouterLink to="/servicos">Serviços</RouterLink>
            <RouterLink to="/">Contato</RouterLink>
            <RouterLink to="/profissional" style="margin: 0px;"><img src="../assets/img/avatar.png" alt="Ícone de perfil" height="60px"></RouterLink>
        </div>
    </nav>
    <hr>
    
</template>

<style scoped>

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--cor-azul-escuro);
        padding: 20px;
    }

    .container {
        display: flex;
        align-items: center;
    }

    a {
        color: white;
        margin: 20px;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    hr {
        height: 4px;
        background-color: var(--cor-laranja);
        border: none;
    }

</style>