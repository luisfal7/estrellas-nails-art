<template>
  <h1>Login view</h1>
  <form>
    <input type="email" placeholder="Correo" required />
    <input type="password" placeholder="Contraseña" required />
    <button>Login</button>
    <router-link :to="{ name:'register' }">¿No tienes cuenta?</router-link>
  </form>
</template>

<script>
export default {

}
</script>

<style>

</style>