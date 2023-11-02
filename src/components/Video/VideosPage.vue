<template>
  <div class="VideosPage" ref="VideosPage">
    <div class="VideoPageContainer" v-for="(video,id) in currentVideos" :style="{top:id>currentIndex?'100%':id===currentIndex?'0':'-100%'}" :key="id">
      <video-page
        class="page"
        :video="video"
        :play="id===currentIndex"
        v-if="Math.abs(id - currentIndex) < 2"
        :close="function () {$router.back()}"
        :nextVideo="nextVideo"
        :lastVideo="lastVideo"
        ref="page" >
      </video-page>
    </div>
  </div>
</template>

<script>
import videoPage from './VideoPage'
export default {
  name: 'VideosPage',
  components: {videoPage},
  data () {
    return {
      currentVideos: [],
      currentIndex: 0,
      testVideos: [
        {
          id: 0,
          videoUrl: './static/1.mp4',
          CountyCoverUrl: '',
          likeNum: 158458,
          duration: 42,
          times: 1.4,
          title: '成分：磷酸氯钙、去离子水、硫酸铝钙二水合物'
        },
        {
          id: 1,
          videoUrl: 'http://s3dzewpfp.hn-bkt.clouddn.com/video/123456/Counter-Strike-Global-Offensive__2023-09-19__16-23-35.mp4?e=1698852815&token=4rdOegZZUy1gurS8qMMI7AZN12p0p62vIaaH08QR:VL43zf5QvBztREdUdkCBl2gpOzY=',
          CountyCoverUrl: '',
          likeNum: 158458,
          duration: 42,
          times: 1.4,
          title: '成分：磷酸氯钙、去离子水、硫酸铝钙二水合物'
        },
        {
          id: 2,
          videoUrl: './static/3.mp4',
          CountyCoverUrl: '',
          likeNum: 6428641,
          duration: 384,
          times: 1.4,
          title: '成分：磷酸氯钙、去离子水、硫酸铝钙二水合物'
        },
        {
          id: 3,
          videoUrl: './static/4.mp4',
          CountyCoverUrl: '',
          likeNum: 1265433,
          duration: 6,
          times: 0.7,
          title: '成分：磷酸氯钙、去离子水、硫酸铝钙二水合物'
        },
        {
          id: 4,
          videoUrl: './static/5.mp4',
          CountyCoverUrl: '',
          likeNum: 8133,
          duration: 8,
          times: 1.8,
          title: '成分：磷酸氯钙、去离子水、硫酸铝钙二水合物'
        },
        {
          id: 5,
          videoUrl: './static/6.mp4',
          CountyCoverUrl: '',
          likeNum: 3543643,
          duration: 11,
          times: 2.4,
          title: '成分：磷酸氯钙、去离子水、硫酸铝钙二水合物'
        },
        {
          id: 6,
          videoUrl: './static/7.mp4',
          CountyCoverUrl: '',
          likeNum: 235413,
          duration: 14,
          times: 1.4,
          title: '成分：磷酸氯钙、去离子水、硫酸铝钙二水合物'
        },
        {
          id: 7,
          videoUrl: './static/8.mp4',
          CountyCoverUrl: '',
          likeNum: 4956,
          duration: 47,
          times: 0.8,
          title: '成分：磷酸氯钙、去离子水、硫酸铝钙二水合物'
        },
        {
          id: 8,
          videoUrl: './static/9.mp4',
          CountyCoverUrl: '',
          likeNum: 32456,
          duration: 12,
          times: 1.4,
          title: '成分：磷酸氯钙、去离子水、硫酸铝钙二水合物'
        },
        {
          id: 9,
          videoUrl: './static/10.mp4',
          CountyCoverUrl: '',
          likeNum: 86545,
          duration: 22,
          times: 3.4,
          title: '成分：磷酸氯钙、去离子水、硫酸铝钙二水合物'
        },
        {
          id: 10,
          videoUrl: './static/11.mp4',
          CountyCoverUrl: '',
          likeNum: 24146,
          duration: 34,
          times: 2.4,
          title: '成分：磷酸氯钙、去离子水、硫酸铝钙二水合物'
        },
        {
          id: 11,
          videoUrl: './static/12.mp4',
          CountyCoverUrl: '',
          likeNum: 8064,
          duration: 10,
          times: 1.4,
          title: '成分：磷酸氯钙、去离子水、硫酸铝钙二水合物'
        },
        {
          id: 12,
          videoUrl: './static/13.mp4',
          CountyCoverUrl: '',
          likeNum: 127764,
          duration: 67,
          times: 2.4,
          title: '成分：磷酸氯钙、去离子水、硫酸铝钙二水合物'
        },
        {
          id: 13,
          videoUrl: './static/14.mp4',
          CountyCoverUrl: '',
          likeNum: 3577,
          duration: 20,
          times: 2.4,
          title: '成分：磷酸氯钙、去离子水、硫酸铝钙二水合物'
        }
      ],
      videoNum: 1
    }
  },
  props: {
  },
  methods: {
    listenEvent () {
      let start = 0
      let end = 0
      let keyDownTimer = null
      document.addEventListener('keydown', (ev) => {
        if (ev.key === 'ArrowDown') {
          clearTimeout(keyDownTimer)
          keyDownTimer = setTimeout(() => {
            this.nextVideo()
          }, 300)
        } else if (ev.key === 'ArrowUp') {
          clearTimeout(keyDownTimer)
          keyDownTimer = setTimeout(() => {
            this.lastVideo()
          }, 300)
        }
      })
      this.$refs.VideosPage.addEventListener('mousedown', (ev) => {
        start = ev.offsetY
      })
      this.$refs.VideosPage.addEventListener('mouseup', (ev) => {
        end = ev.offsetY
        if (start - end > 200) {
          this.nextVideo()
        } else if (end - start > 200) {
          this.lastVideo()
        }
      })
    },
    lastVideo () {
      if (this.currentIndex) {
        this.currentIndex--
      }
    },
    nextVideo () {
      let that = this
      if (this.currentIndex < this.currentVideos.length - 1) {
        this.currentIndex++
        if (this.currentIndex === this.currentVideos.length - 1) {
          this.getNewVideo().then(res => {
            if (res) {
              that.currentVideos.push(res)
            }
          })
        }
      } else {
        this.$message.warning('正在加载下一个视频')
      }
    },
    init () {
      this.currentIndex = 0
      this.currentVideos = []
    },
    async getNewVideo () {
      let that = this
      return new Promise((resolve) => {
        setTimeout(() => {
          if (that.testVideos.length === 0) {
            resolve(null)
          } else {
            let ret = that.testVideos[0]
            that.testVideos.shift()
            resolve(ret)
          }
        }, 1000)
      })
    }
  },
  mounted () {
    let that = this
    this.listenEvent()
    this.getNewVideo().then(res => {
      if (res) {
        that.currentVideos.push(res)
      }
    })
    this.getNewVideo().then(res => {
      if (res) {
        that.currentVideos.push(res)
      }
    })
  },
  created () {
    this.init()
  }
}
</script>

<style scoped lang="scss">
  .VideosPage{
    position: relative;
    overflow: hidden;
    //overflow: scroll;
    height: 100%;
    width: 100%;
    .VideoPageContainer{
      height: 100%;
      width: 100%;
      position: absolute;
      transition: top 0.5s;
      .page{
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: 6;
      }
    }
  }
</style>
