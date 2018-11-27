import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    showToolbar: true,
    alerts: null,
    token: null,
    user: null,
    isUserLogin: null
  },
  mutations: {
    showToolbar (state, showToolbar) {
      state.showToolbar = showToolbar
    },
    setAlerts (state, setAlerts) {
      state.alerts = setAlerts
    },
    setToken (state, setToken) {
      state.token = setToken
      state.isUserLogin = setToken ? true : null
    },
    setUser (state, setUser) {
      state.user = setUser
    }
  },
  actions: {
    showToolbar ({ commit }, showToolbar) {
      commit('showToolbar', showToolbar)
    },
    setAlerts ({ commit }, setAlerts) {
      commit('setAlerts', setAlerts)
    },
    setToken ({ commit }, setToken) {
      commit('setToken', setToken)
    },
    setUser ({ commit }, setUser) {
      commit('setUser', setUser)
    }
  }
})
