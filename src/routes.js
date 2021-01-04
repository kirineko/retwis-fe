import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home'
import Mentions from './components/Mentions'
import Profile from './components/Profile'
import Timeline from './components/Timeline'
import Auth from './components/Auth'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Home},
  {path: '/timeline', component: Timeline},
  {path: '/login', component: Auth},
  {path: '/mentions/:username', component: Mentions},
  {path: '/:username', component: Profile}
]

export default new VueRouter({
  mode: 'history',
  routes
})
