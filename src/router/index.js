import Vue from 'vue'
import Router from 'vue-router'
import DiscoverPage from '../view/DiscoverPage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'discover',
      component: DiscoverPage
    }
  ]
})
