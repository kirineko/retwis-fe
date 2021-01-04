import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'
import router from './routes'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    username: null
  },

  mutations: {
    authUser (state, userData) {
      state.idToken = userData.token
      state.userId = userData.userId
      state.username = userData.username
    },

    clearAuthData(state) {
      state.idToken = null
      state.userId = null
      state.username = null
    }
  },

  actions: {
    signup ({commit}, authData) {
      axios.post('/signup', authData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then((res) => {
          commit('authUser', {
            token: res.data.data.auth,
            userId: res.data.data.user.uid,
            username: res.data.data.user.username
          })
          localStorage.setItem('token', res.data.data.auth)
          localStorage.setItem('userId', res.data.data.user.uid)
          localStorage.setItem('username', res.data.data.user.username)
        }).then(() => {
          router.push('/')
        })
        .catch(error => console.log(error))
    },

    login ({commit}, authData) {
      axios.post('/login', authData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then((res) => {
          commit('authUser', {
            token: res.data.data.auth,
            userId: res.data.data.user.uid,
            username: res.data.data.user.username
          })
          localStorage.setItem('token', res.data.data.auth)
          localStorage.setItem('userId', res.data.data.user.uid)
          localStorage.setItem('username', res.data.data.user.username)
        }).then(() => {
          router.push('/')
        })
        .catch(error => console.log(error))
    },

    logout({commit, state}) {
      axios.get(`/logout?auth=${state.idToken}`)
      .then(res => {
        commit('clearAuthData')
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        localStorage.removeItem('username')
        router.replace('/login')
      })
      .catch(error => console.log(error))
    },

    tryAutoLogin({commit}) {
      const token = localStorage.getItem('token')
      const userId = localStorage.getItem('userId')
      const username = localStorage.getItem('username')
      if (!token) {
        return
      }
      commit('authUser', {
        token,
        userId,
        username
      })
    }
  },

  getters: {
    auth(state) {
      return state.idToken !== null
    },

    username(state) {
      return state.username
    },

    token(state) {
      return state.idToken
    }
  }
})
