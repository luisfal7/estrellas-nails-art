<template>
    <h1>home view</h1>
    <button @click="onQuote">
        turno
    </button>
    <Gallery/>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { useRouter } from "vue-router";

export default {

    components: {
        Gallery: defineAsyncComponent(() => import("../components/Gallery.vue")),
    },
    
    setup() {

        const router = useRouter()

        return {

            onQuote: () => router.push({ name: "quote" })

        }
    }
}
</script>
