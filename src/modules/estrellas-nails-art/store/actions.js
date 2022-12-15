// export const myActions = async ({commit}) => {}

import estrellasApi from "@/api/estrellasApi"
import useClient from "../composables/useClient";

export const loadModels = async ({commit}) => {

    const { data } = await estrellasApi.get(`/models.json`)
    const models = []
    for( let id of Object.keys( data ) ){
        models.push({
            id,
            ...data[id]
        })
    }
    commit('setModel', models)
}

export const loadClients = async ({commit}) => {

    const { data } = await estrellasApi.get(`/clients.json`)
    const clients = []
    for( let id of Object.keys( data ) ){
        clients.push({
            id,
            ...data[id]
        })
    }
    commit('setClients', clients)
    return clients
}

export const createClient = async ({commit}, client) => {

    try {

        const { data } = await estrellasApi.get(`/clients.json`)
        const clients = []
        for( let id of Object.keys( data ) ){
            clients.push({
                id,
                ...data[id]
            })
        }

        if( !clients.some( e => e.fecha === client.fecha && e.hour === client.hour)){
            const { data } = await estrellasApi.post('clients.json', client)
            console.log(data)
            return { ok: true }
        }else{
            return { ok: false, message: 'turno no valido' }
        }
    } catch (error) {
        console.log(error)
        return { ok: false, message: 'error...' }
    }

}



