// export const myMutations = (state) => {}

export const setImage = ( state, images ) => {

    state.images = [ ...state.images, ...images ]

}

export const setModel = ( state, models ) => {

    state.models = [ ...state.models, ...models ]

}

export const setColor = ( state, colors ) => {

    state.colors = [ ...state.colors, ...colors ]

}

export const setServices = ( state, services ) => {

    state.services = [ ...state.services, ...services ]

}

export const addService = ( state, service) => {

    state.services = [ ...state.services, service ]

}