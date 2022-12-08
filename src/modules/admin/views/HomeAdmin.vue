<template>
  <h1>Home admin</h1>
    <UploadImage/>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {

    components: {
        UploadImage: defineAsyncComponent(() => import("../components/UploadImage.vue"))
    },
    
    setup() {

    },
}
</script>

<style>

</style>