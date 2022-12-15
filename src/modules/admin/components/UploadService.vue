<template>
  <h1>cargar servicios</h1>
  <form @submit.prevent="onSubmitService">
    <input v-model="newService.service" type="text" placeholder="servicio"/>
    <button type="submit">enviar</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useAdmin from "../composables/useAdmin";

export default {
    setup(){

        const { createService } = useAdmin()

        const newService = ref({
            service: null
        })

        const onSubmitService = async() => {
            const { ok, message } = await createService(newService.value)
            console.log(ok, message)
        }

        return{
            onSubmitService,
            newService
        }
    } 
}
</script>

<style>

</style>