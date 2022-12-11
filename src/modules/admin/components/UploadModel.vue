<template>
<h1>Cargar modelos</h1>
  <img
    v-if="localModel"
    :src="localModel"
    alt="model" 
    />
  <div>
    <input
      ref="modelSelector"
      type="file"
      @change="onSelectedModel"
      v-show="false"
      accept="image/png, image/jpeg"
    />
    <button @click="onSelectModel">seleccionar modelo</button>
    <button @click="onSaveModel">guardar</button>
    <button @click="onCancelModel">cancelar</button>
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

    let modelSelector = ref(null);
    let localModel = ref(null);
    let file = ref(null);

    store.dispatch('admin/loadModel')

    return {
      modelSelector,

      localModel,

      onSelectModel: () => modelSelector.value.click(),

      onSelectedModel: (event) => {
        const uploadModel = event.target.files[0];

       if (!uploadModel) {
          localModel.value = null
          file.value = null
          return;
        }
        file = uploadModel

        const fr = new FileReader();
        fr.onload = () => (localModel.value = fr.result)
        fr.readAsDataURL(uploadModel)
      },

      onSaveModel: async () => {
        const model = await uploadImageDB(file);
        const {data} = await estrellasApi.post(`models.json`, { model })

        if(data.name){
          localModel.value = null
          file.value = null
        }
      },

      onCancelModel: () => {
        localModel.value = null
        file.value = null
      }

    };
  },

}
</script>

<style>

</style>