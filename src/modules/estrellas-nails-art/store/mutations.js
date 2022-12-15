// export const myMutations = (state) => {}

export const setModel = ( state, models ) => {

    state.models = [ ...state.models, ...models ]

}

export const setClients = ( state, clients ) => {

    state.clients = [ ...state.clients, ...clients ]

}