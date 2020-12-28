import Home from './components/Home'
import Mentions from './components/Mentions'
import Profile from './components/Profile'
import Timeline from './components/Timeline'
import Auth from './components/Auth'

export const routes = [
  {path: '/', component: Home},
  {path: '/timeline', component: Timeline},
  {path: '/login', component: Auth},
  {path: '/mentions/:username', component: Mentions},
  {path: '/:username', component: Profile}
]
