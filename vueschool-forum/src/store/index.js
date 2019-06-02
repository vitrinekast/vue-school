import Vue from 'vue'
import Vuex from 'Vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authId: 'ALXhxjwgY9PinwNGHpfai6OWyDu2',
    posts: {},
    forums: {},
    categories: {},
    threads: {},
    users: {}
  },

  getters,
  actions,
  mutations
})
