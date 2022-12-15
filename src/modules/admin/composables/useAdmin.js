import { useStore } from "vuex";

const useAdmin = () => {

    const store = useStore()

    const createService = async ( newService ) => {
        const resp = await store.dispatch('admin/createService', newService)
        return resp
    }

    return{
        createService,
    }
}

export default useAdmin