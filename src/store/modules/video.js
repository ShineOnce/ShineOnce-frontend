const Video = {
  autoNext: false // 自动连播
}

const getters = {
  getAutoNext () {
    return Video.autoNext
  }
}

const mutations = {
  setAutoNext (autoNext) {
    Video.autoNext = autoNext
    console.log(Video.autoNext)
  }
}

export default {
  namespaced: true,
  Video,
  getters,
  mutations
}
