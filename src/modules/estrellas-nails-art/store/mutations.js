// export const myMutations = (state) => {}

export const setModel = ( state, models ) => {

    state.models = [ ...state.models, ...models ]

}