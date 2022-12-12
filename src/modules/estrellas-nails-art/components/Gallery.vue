<template>
  <h1>Gallery</h1>

  <img
    v-for="model in models"
    :key="model.id"
    :src="model.model"
    alt="image-model">

</template>

<script>
import { computed } from 'vue';
import { useStore } from "vuex";

export default {
  setup(){

    const store = useStore()

    const loadModels = () => {
      store.dispatch('estrellas/loadModels')
    } 

    loadModels()

    return{
      models: computed(() => store.getters['estrellas/getModels'].slice(0,6)) 
    }

  }

}
</script>

<style>

</style>