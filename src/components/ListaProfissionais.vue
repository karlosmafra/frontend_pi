<script setup>
    import CardProfissional from '@/components/CardProfissional.vue';
    import Avatar from '@/assets/img/avatar_placeholder.png';

    const profissionais = [{nome: "João Cardoso", funcao: "Corretor Imobiliário", imagem: Avatar, clientes: 30, nota: 5}, 
    {nome: "Fernanda Pereira", funcao: "Arquiteta", imagem: Avatar, clientes: 60, nota: 4},  
    {nome: "Sandro Alves", funcao: "Pedreiro", imagem: Avatar, clientes: 80, nota: 4},
    {nome: "Juliana Maria", funcao: "Engenheira", imagem: Avatar, clientes: 40, nota: 5}]
</script>


<template>

    <div id="div-profissionais-cards">
        <CardProfissional v-for="prof in profissionais" :key="index" :prof="prof"/>
    </div>

</template>


<style scoped>

    #div-profissionais-cards {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 60px;
        justify-content: center;
        place-items: center;
    }

    @media (max-width: 768px) {
    #div-profissionais-cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }

</style>
