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

/* export const updatePicture = async({commit}, picture) => {

    const { picture } = picture
    const dataToSave = { picture }

    const resp = await estrellasApi.put(`/gallery/${picture.id}`, dataToSave)

    commit('updatePicture', { ...picture } )

} */

/* export const createPicture = async({commit}, image) => {

    const { picture } = image
    const dataToSave = { picture }

    const { data } = await estrellasApi.post(`gallery.json`, dataToSave)

    dataToSave.id = data.name

    commit('addPicture', dataToSave)

} */