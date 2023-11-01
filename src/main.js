// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'video.js/dist/video-js.css'
import './assets/icon/iconfont.css'
import './assets/css/video.css'
import './assets/css/element.css'
import * as math from 'mathjs/lib/browser/math'
import {videoInit} from './assets/js/VideoInit'
Vue.prototype.$math = math
Vue.use(Element)
Vue.config.productionTip = false
videoInit()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
