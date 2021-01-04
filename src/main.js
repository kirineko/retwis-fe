import Vue from 'vue'
import App from './App.vue'

import router from './routes'
import store from './store'
import regeneratorRuntime from "regenerator-runtime";


router.beforeResolve((to, from, next) => {
  if (to.path == '/login') {
    next()
  } else if (store.getters.auth) {
    next()
  } else {
    next('/login')
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
