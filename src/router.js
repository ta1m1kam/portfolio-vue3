import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Works from './views/Works'
import Award from './views/Award'
import Contact from './views/Contact'

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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    },
    {
      path: '/works',
      name: 'Works',
      component: Works
    },
    {
      path: '/award',
      name: 'Award',
      component: Award
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: "*",
      redirect: '/'
    }
  ]
})
