import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Invitees from './views/Invitees.vue'
import Sheduls from './views/Sheduls.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
   {
    path: '/invitees',
    name: 'invitees',
    component: Invitees
  },
 
 

  {
    path: '/sheduls',
    name: 'sheduls',
    component:Sheduls //() => import(/* webpackChunkName: "sheduls" */ './views/sheduls.vue')
  },
    {
      path: '/signup',
      name: 'signup',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Signup.vue')
    }
  ]
})
