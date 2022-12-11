<template>
  <h1>Home admin</h1>
    <UploadImage/>
    <UploadModel/>
    <UploadColor/>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {

    components: {
        UploadImage: defineAsyncComponent(() => import("../components/UploadImage.vue")),
        UploadModel: defineAsyncComponent(() => import("../components/UploadModel.vue")),
        UploadColor: defineAsyncComponent(() => import("../components/UploadColor.vue")),
    },

    setup() {

    },
}
</script>

<style>

</style>