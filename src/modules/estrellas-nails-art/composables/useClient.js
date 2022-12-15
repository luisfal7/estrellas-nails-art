import { useStore } from "vuex";
import estrellasApi from "@/api/estrellasApi";

const useClient = () => {

    const store = useStore()

    const createClient = async ( client ) => {
        const resp = await store.dispatch('estrellas/createClient', client)
        return resp
    }

    const dbClients = async () => {
        const { data } = await estrellasApi.get(`/clients.json`)
        const clients = []
        for( let id of Object.keys( data ) ){
            clients.push({
                id,
                ...data[id]
            })
        }
        return clients
    }         

    return{
        createClient,
        dbClients
    }
}

export default useClient