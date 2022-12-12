<template>
<nav>
  <button @click="onLogin">login</button>
</nav>
  <router-view/>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  setup(){
    const router = useRouter()

    return{
      onLogin: () => router.push({ name: "login" })
    }

  }

}
</script>

<style>

</style>