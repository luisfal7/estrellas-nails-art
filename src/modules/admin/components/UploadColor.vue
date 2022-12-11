<template>
  <h1>cargar colores</h1>
    <img
    v-if="localColor"
    :src="localColor"
    alt="picture" 
    />
  <div>
    <input
      ref="colorSelector"
      type="file"
      @change="onSelectedColor"
      v-show="false"
      accept="image/png, image/jpeg"
    />
    <button @click="onSelectColor">seleccionar imagen</button>
    <button @click="onSaveColor">guardar</button>
    <button @click="onCancelColor">cancelar</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex'
import uploadImageDB from "@/modules/admin/helpers/uploadImageDB";
import estrellasApi from '@/api/estrellasApi';

export default {
  setup() {

    const store = useStore()

    let colorSelector = ref(null);
    let localColor = ref(null);
    let file = ref(null);

    store.dispatch('admin/loadColor')

    return {
      colorSelector,

      localColor,

      onSelectColor: () => colorSelector.value.click(),

      onSelectedColor: (event) => {
        const uploadColor = event.target.files[0];

       if (!uploadColor) {
          localColor.value = null
          file.value = null
          return;
        }
        file = uploadColor

        const fr = new FileReader();
        fr.onload = () => (localColor.value = fr.result)
        fr.readAsDataURL(uploadColor)
      },

      onSaveColor: async () => {
        const color = await uploadImageDB(file);
        const {data} = await estrellasApi.post(`colors.json`, { picture: color })

        if(data.name){
          localColor.value = null
          file.value = null
        }

      },

      onCancelColor: () => {
        localColor.value = null
        file.value = null
      }

    };
  },

}
</script>

<style>

</style>