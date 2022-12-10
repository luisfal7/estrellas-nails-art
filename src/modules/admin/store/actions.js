// export const myActions = async ({commit}) => {}

import estrellasApi from "@/api/estrellasApi";

export const loadPicture = async (/* {commit} */) => {

    const { data } = await estrellasApi.get(`/gallery.json`)
    
}