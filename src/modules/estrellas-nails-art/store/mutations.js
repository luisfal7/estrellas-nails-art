// export const myMutations = (state) => {}

export const setModel = ( state, models ) => {

    state.models = [ ...state.models, ...models ]

}

export const setClients = ( state, clients ) => {

    state.clients = [ ...state.clients, ...clients ]

}

export const addClient = ( state, client ) => {

    state.clients = [ ...state.clients, client ]

}