// export const myMutations = (state) => {}

export const updatePicture = ( state, picture ) => {

    const idx = state.gallery.map( e => e.id).indexOf( picture.id )
    state.gallery[idx] = picture
}