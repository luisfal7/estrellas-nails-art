// export const myMutations = (state) => {}

export const setImage = ( state, images ) => {

    state.images = [ ...state.images, ...images ]

}

export const setModel = ( state, models ) => {

    state.models = [ ...state.models, ...models ]

}