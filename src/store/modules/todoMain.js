export const todoMain = {
  namespaced: true,
  state: {
    list: [
      {
        name: '吃饭',
        done: false,
        id: 1
      },
      {
        name: '睡觉',
        done: false,
        id: 2
      },
      {
        name: '打豆豆',
        done: false,
        id: 3
      }
    ]
  },
  mutations: {
    del(state, payload) {
      state.list.splice(payload, 1)
    },
    addListItem(state, payload) {
      // console.log(payload)
      const item = {}
      item.name = payload
      item.done = false
      item.id = state.list.length + 1
      state.list.unshift(item)
    }
  },
  actions: {
    delItem(context, payload) {
      context.commit('del', payload)
    },
    addItems(context, payload) {
      context.commit('addListItem', payload)
    }
  },
  getters: {}
}
