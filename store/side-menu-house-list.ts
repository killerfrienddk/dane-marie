interface State {
    sideMenuOut: boolean;
}

export const state = () => ({
    sideMenuOut: false,
})

export const getters = {
    getSideMenuOut(state: State) {
        return state.sideMenuOut
    }
}

export const mutations = {
    toggle(state: State) {
        state.sideMenuOut = !state.sideMenuOut
    }
}
