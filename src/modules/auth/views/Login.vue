<template>
  <h1>Login view</h1>
  <form @submit.prevent="onSubmit">
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
    <button>Login</button>
    <router-link :to="{ name:'register' }">¿No tienes cuenta?</router-link>
  </form>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useAuth from "../composables/useAuth";

export default {
    setup(){

    const router = useRouter()
    const { loginUser } = useAuth()

    const userForm = ref({
      email:'lf@gmail.com',
      password:'123456'
    })

    return{
      userForm,
      onSubmit: async() => {
        const { ok, message } = await loginUser( userForm.value )
        console.log(ok,message)

        if(!ok) alert(message)
        else router.push({name: 'home'})
      } 

    }

  }

}
</script>

<style>

</style>