import store from "@/store";

const isAuthenticatedGuard = async( to, from, next ) => {

    const { ok } = await store.dispatch('auth/checkAuthentication')

    if( ok ) next()
    else next({ name: 'register' })

}

export default isAuthenticatedGuard