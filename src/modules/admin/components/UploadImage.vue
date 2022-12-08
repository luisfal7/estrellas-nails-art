<template>
  <h1>Cargar imagenes</h1>
  <div>
    <input
        ref="imageSelector"
        type="file"
        v-show="false"
        accept="image/png, image/jpeg"
    />
  <button @click="onSelectImage">subir imagen</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {

    setup(){

        const imageSelector = ref(null)
    
        return{
            imageSelector,
            onSelectImage: () => imageSelector.value.click(),
        }

    }

}
</script>

<style>

</style>