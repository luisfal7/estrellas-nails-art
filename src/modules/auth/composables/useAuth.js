import { useStore } from "vuex";

const useAuth = () => {

    const store = useStore()

    const createUser = async(user) => {
        const resp = await store.dispatch('auth/createUSer', user)
        return resp
    }

    return{
        createUser
    }

}

export default useAuth