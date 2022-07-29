export const changeSkin = {
  namespaced: true,

  state: { color: '' },
  mutations: {
    change(state, payload) {
      state.color = payload
      console.log(state.color)
    }
  },
  actions: {
    changeFontColor(context, payload) {
      context.commit('change', payload)
    }
  },
  getters: {}
}
