<template>
  <div class="final">
    <div :class=" `final-texto ${etapa}` ">
      {{ texto }}
    </div>

    <img class="img-final" v-if="etapa === 'ganhador'" src="../img/comemoracao.webp">
    <img class="img-final" v-if="etapa === 'enforcado'" src="../img/derrota.gif">

    <button class="final-botao" v-on:click="jogarNovamente">Jogar novamente</button>
  </div>
</template>

<script>

  export default{
    name: 'Final',
    props: {
      etapa: String,
      texto: String,
      jogarNovamente: Function
    },

    data(){
      return {
       
      }
    },
    
    methods: {
     
    },

    components: {
    }
  }
</script>

<style>
  .final-texto{
    margin: 20px 0;
    font-size: 24px;
    font-weight: bold;
  }

  .final-texto.enforcado {
    color: var(--color-text-error);
  }

  .final-texto.ganhador {
    color: var(--color-text-success);
  }

  .img-final{
    margin-bottom: 30px;
  }

  .final-botao{
    display: flex;
    margin: 0 auto;
  }
</style>