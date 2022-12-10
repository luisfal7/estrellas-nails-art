<template>
  <h1>Cargar imagenes</h1>
  <img
    v-if="localImage"
    :src="localImage"
    alt="picture" 
    />
  <div>
    <input
      ref="imageSelector"
      type="file"
      @change="onSelectedImage"
      v-show="false"
      accept="image/png, image/jpeg"
    />
    <button @click="onSelectImage">seleccionar imagen</button>
    <button @click="onSaveImage">guardar</button>
    <button @click="onCancelImage">cancelar</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex'
import uploadImageDB from "@/modules/admin/helpers/uploadImageDB";

export default {
  setup() {

    const store = useStore()

    let imageSelector = ref(null);
    let localImage = ref(null);
    let file = ref(null);

    store.dispatch('admin/loadPicture')

    return {
      imageSelector,

      localImage,

      onSelectImage: () => imageSelector.value.click(),

      onSelectedImage: (event) => {
        const uploadImage = event.target.files[0];

       if (!uploadImage) {
          localImage.value = null
          file.value = null
          return;
        }
        file = uploadImage

        const fr = new FileReader();
        fr.onload = () => (localImage.value = fr.result)
        fr.readAsDataURL(uploadImage)
      },

      onSaveImage: async () => {
        await uploadImageDB(file);
      },

      onCancelImage: () => {
        localImage.value = null
        file.value = null
      }

    };
  },

};
</script>

<style scoped>
img {
  border: 1px solid;
  width: 200px;
  position: fixed;
  bottom: 50px;
}
</style>
