import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import CarpoolappHomePage from '@/components/CarpoolappHomePage'
import Passengers from '@/components/Passengers'
import Drivers from '@/components/Drivers'

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
      path: '/drivers',
      name: 'Drivers',
      component: Drivers
    }
  ]
})
