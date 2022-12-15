// export const myActions = async ({commit}) => {}

import estrellasApi from "@/api/estrellasApi";

export const loadImage = async ({commit}) => {

    const { data } = await estrellasApi.get(`/gallery.json`)
    const images = []
    for( let id of Object.keys( data ) ){
        images.push({
            id,
            ...data[id]
        })
    }
    commit('setImage', images)
}

export const loadModel = async ({commit}) => {

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

export const loadColor = async ({commit}) => {

    const { data } = await estrellasApi.get(`/colors.json`)
    const models = []
    for( let id of Object.keys( data ) ){
        models.push({
            id,
            ...data[id]
        })
    }
    commit('setColor', models)
}

export const loadServices = async ({commit}) => {

    const { data } = await estrellasApi.get(`/services.json`)
    const services = []
    for( let id of Object.keys( data ) ){
        services.push({
            id,
            ...data[id]
        })
    }
    commit('setServices', services)
}

export const createService = async({commit}, newService) => {

    try {
        const { data } = await estrellasApi.get(`/services.json`)
        const services = []
        for( let id of Object.keys( data ) ){
            services.push({
                id,
                ...data[id]
            })
        }
        if(!services.some( e => e.service === newService.service )){
            const { data } = await estrellasApi.post(`services.json`, newService)
            console.log(data)
            commit('addService', newService)
            return { ok: true }
        }else{
            return { ok: false, message: 'Servicio ya existente' }
        }
    } catch (error) {
        console.error(error)
        return { ok: false, message: 'error...' }
    }
}