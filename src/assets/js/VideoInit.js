import Vue from 'vue'
import videojs from 'video.js'

export function videoInit () {
  Vue.prototype.$video = videojs
}
