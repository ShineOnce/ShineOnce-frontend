import Vue from 'vue'
import Router from 'vue-router'
import DiscoverPage from '../view/DiscoverPage'
import VideosPage from '../components/Video/VideosPage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/homepage',
      name: 'discover',
      component: DiscoverPage
    },
    {
      path: '/video/:videoId',
      name: 'videoPage',
      component: VideosPage
    }
  ]
})
