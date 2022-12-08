export default {

    name:'admin',
    component: () => import(/* webpackChunkName: "admin" */ '@/modules/admin/layouts/AdminLayout.vue'),
    children: [
        {
            path:'',
            name:'homeAdmin',
            component: () => import(/* webpackChunkName: "HomeAdmin" */ '@/modules/admin/views/HomeAdmin.vue'),
        }
    ]

}