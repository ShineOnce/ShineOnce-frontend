import Vue from 'vue'
import Router from 'vue-router'
import DiscoverPage from '../view/DiscoverPage'
import VideosPage from '../components/Video/VideosPage'
import Recommend from '../view/Recommend'
import UserPage from '../view/user/UserPage'
import UserPostPage from '../view/user/UserPostPage'
import UserLikePage from '../view/user/UserLikePage'
import UserCollectPage from '../view/user/UserCollectPage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: DiscoverPage
    },
    {
      path: '/homepage',
      name: 'discover',
      component: DiscoverPage
    },
    {
      path: '/video/:videoId',
      name: 'videoPage',
      component: VideosPage
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/user',
      name: 'user',
      component: UserPage,
      children: [
        {
          path: '/user/post',
          name: 'post',
          component: UserPostPage
        },
        {
          path: '/user/like',
          name: 'like',
          component: UserLikePage
        },
        {
          path: '/user/collect',
          name: 'collect',
          component: UserCollectPage
        }
      ]
    }
  ]
})
