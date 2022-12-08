<template>
  <h1>Cargar imagenes</h1>
  <div>
    <img
      :src="localImage"
      alt="picture"
    />
    <input
        ref="imageSelector"
        type="file"
        @change="onSelectedImage"
        v-show="false"
        accept="image/png, image/jpeg"
    />
  <button @click="onSelectImage">seleccionar imagen</button>
  <button @click="onSaveImage">guardar</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import uploadImage from "@/modules/admin/helpers/uploadImage";

export default {

    setup(){
        const store = useStore()

        const imageSelector = ref(null)
        const localImage =  ref(null)
        const file = ref(null)

        return{
            imageSelector,

            onSelectImage: () => imageSelector.value.click(),

            onSelectedImage: (event) => {
                const uploadImage = event.target.files[0]

                if ( !uploadImage ){
                    localImage.value = null
                    file.value = null
                    return    
                }

                file.value = uploadImage 

                const fr = new FileReader()
                fr.onload = () => localImage.value = fr.result
                fr.readAsDataURL( uploadImage )
                console.log( uploadImage )
            },
            onSaveImage: async() => {
                await uploadImage( file.value )
            }
        }
    }
}
</script>

<style scoped>

img {
  border: 1px solid;
  width: 200px;
  position:fixed;
  bottom: 50px;
}

</style>