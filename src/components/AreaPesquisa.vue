<script setup>
    import BarraPesquisa from './BarraPesquisa.vue';
    import BotaoQuadrado from './BotaoQuadrado.vue';
</script>

<template>

    <div id="div-busca">
      <p>Encontre os Melhores Profissionais</p>
      <div id="div-barra-botao">
        <BarraPesquisa/>
        <BotaoQuadrado :texto="'BUSCAR'" :cor="'var(--cor-laranja)'" />
      </div>
    </div>

</template>

<style scoped>

    #div-busca{
        background-color: var(--cor-azul);
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        height: 230px;
        margin-bottom: 50px;
    }

    #div-barra-botao {
        display: flex;
        justify-content: center; 
        align-items: center;
        width: 100%;
    }

    p {
        text-align: center;
        margin-bottom: 25px;
        font-size: 2em;
    }

    input {
        width: 860px;
        height: 40px;
        margin-right: 15px;
    }

    button {
        width: 160px;
        height: 40px;
        font-size: 1em;
    }

    @media (max-width: 768px) {
        input {
        width: 80%;
        }
    }

    @media (max-width: 480px) {
        input {
        width: 90%;
        }
        button {
        width: 90%;
        }
    }

</style>