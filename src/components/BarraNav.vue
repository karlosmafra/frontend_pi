<script setup>
    import { RouterLink } from 'vue-router'
    import Logo from '@/assets/img/logo_branca_16.png'
</script>

<template>
    
    <nav>
         <div class="container" id="container-img">
           <img :src="Logo" alt="Logo">
         </div>
        <div class="container" id="container-links">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/servicos">Serviços</RouterLink>
            <RouterLink to="/">Contato</RouterLink>
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

    hr {
        height: 2px;
        background-color: var(--cor-laranja);
        border: none;
    }

</style>