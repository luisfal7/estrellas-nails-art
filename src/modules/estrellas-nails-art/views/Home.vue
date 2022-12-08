<template>
    <h1>home view</h1>
    <Gallery/>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {

    components: {
        Gallery: defineAsyncComponent(() => import("../components/Gallery.vue")),
    },
    
    setup() {

    },
}
</script>
