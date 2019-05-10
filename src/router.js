import Vue from 'vue'
import Router from 'vue-router'
import Pricing from './components/Pricing.vue'
import Process from './components/Process.vue'
import Proposal from './components/Proposal.vue'
import Terms from './components/Terms.vue'
import Timeline from './components/Timeline.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'proposal',
      component: Proposal
    },
    {
      path: '/pricing',
      name: 'pricing',
      // route level code-splitting
      // this generates a separate chunk (pricing.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "pricing" */ './components/Pricing.vue')
    },
    {
      path: '/process',
      name: 'process',
      // route level code-splitting
      // this generates a separate chunk (process.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "process" */ './components/Process.vue')
    },
    {
      path: '/terms',
      name: 'terms',
      // route level code-splitting
      // this generates a separate chunk (terms.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "terms" */ './components/Terms.vue')
    },
    {
      path: '/timeline',
      name: 'timeline',
      // route level code-splitting
      // this generates a separate chunk (timeline.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "timeline" */ './components/Timeline.vue')
    }
  ]
})
