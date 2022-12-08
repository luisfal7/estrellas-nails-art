export default {

    name:'estrellas-nails-art',
    component: () => import(/* webpackChunkName: "estrellas-nails-art" */ '@/modules/estrellas-nails-art/layouts/EstrellaLayout.vue'),
    children: [
        {
            path:'',
            name:'home',
            component: () => import(/* webpackChunkName: "home" */ '@/modules/estrellas-nails-art/views/Home.vue'),
        },
        {
            path:'/colors',
            name:'colors',
            component: () => import(/* webpackChunkName: "colors" */ '@/modules/estrellas-nails-art/views/Colors.vue'),
        }
    ]
}