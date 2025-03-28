<script setup>
    import { RouterLink } from 'vue-router';
    //import Logo from '../assets'
</script>

<template>
    <div class="container-links">
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/">Serviços</RouterLink>
            <RouterLink to="/">Contato</RouterLink>
        </nav>
    </div>
</template>

<style scoped>

    nav {
        background-color: aqua;
        padding: 20px;
    }

    .container-links {
        text-align: right;
    }

</style>