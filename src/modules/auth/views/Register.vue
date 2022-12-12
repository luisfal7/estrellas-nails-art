<template>
  <h1>Register view</h1>
    <form @submit.prevent="onSubmit">
      <input
        v-model="userForm.name"
        type="text"
        placeholder="Nombre"
        required />
      <input
        v-model="userForm.email"
        type="email"
        placeholder="Correo"
        required />
      <input
        v-model="userForm.password"
        type="password"
        placeholder="Contraseña"
        required />
      <button type="submit">Login</button>
      <router-link :to="{ name:'login' }">¿ya tienes cuenta?</router-link>
  </form>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useAuth from "../composables/useAuth";


export default {
  setup(){
    const router = useRouter()
    const { createUser } = useAuth()

    const userForm = ref({
      name:'LF',
      email:'lf@gmail.com',
      password:'123456'
    })

    return{
      userForm,
      onSubmit: async() =>{
        const { ok, message } = await createUser( userForm.value )
        if(ok) router.push({name: 'home'})
        else alert(message)
      } 

    }

  }
}
</script>

<style>

</style>