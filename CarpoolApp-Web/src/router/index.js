import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import CarpoolappHomePage from '@/components/CarpoolappHomePage'
import Passengers from '@/components/Passengers'
import Routes from '@/components/Routes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'CarpoolappHomePage',
      component: CarpoolappHomePage
    },
    {
      path: '/passengers',
      name: 'Passengers',
      component: Passengers
    },
    {
      path: '/routes',
      name: 'Routes',
      component: Routes
    }
  ]
})
