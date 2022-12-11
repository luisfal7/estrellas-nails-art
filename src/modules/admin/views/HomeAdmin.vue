<template>
  <h1>Home admin</h1>
    <UploadImage/>
    <UploadModel/>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {

    components: {
        UploadImage: defineAsyncComponent(() => import("../components/UploadImage.vue")),
        UploadModel: defineAsyncComponent(() => import("../components/UploadModel.vue")),
    },

    setup() {

    },
}
</script>

<style>

</style>