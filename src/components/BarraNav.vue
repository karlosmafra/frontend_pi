<script setup>
    import { RouterLink } from 'vue-router'
    import Logo from '@/assets/img/logo-240.png'
</script>

<template>
    
    <nav>
         <div class="container" id="container-img">
           <!-- <img :src="Logo" alt="Logo">-->
         </div>
        <div class="container" id="container-links">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/">Serviços</RouterLink>
            <RouterLink to="/">Contato</RouterLink>
        </div>
    </nav>
    <hr>
    
</template>

<style scoped>

    nav {
        display: flex;
        justify-content: space-between;
        background-color: var(--cor-azul-escuro);
        padding: 25px;
    }

    .container {
        display: inline-block;
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