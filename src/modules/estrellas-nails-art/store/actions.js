// export const myActions = async ({commit}) => {}

import estrellasApi from "@/api/estrellasApi"

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