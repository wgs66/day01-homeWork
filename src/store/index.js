import Vue from 'vue'
import Vuex from 'vuex'
import { changeSkin } from './modules/changeSkin'
import { todoMain } from './modules/todoMain'
import createVuexPersisted from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { todoMain, changeSkin },
  plugins: [
    createVuexPersisted({
      reducer(state) {
        return {
          todoMain: state.todoMain,
          changeSkin: state.changeSkin
        }
      }
    })
  ]
})
