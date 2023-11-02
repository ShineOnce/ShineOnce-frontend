<template>
  <div id="homepage">
    <ul class="container infinite-list" v-infinite-scroll="load" infinite-scroll-distance="10"  ref="container">
      <li v-for="(video, id) in this.videos" v-bind:key="id"  class="item" ref="item">
        <video-card v-bind:video="video" :sortCard="sortVideo" ref="videoCard" ></video-card>
      </li>
    </ul>

  </div>
</template>

<script>
import VideoCard from '../components/Video/VideoCard'
import VideosPage from '../components/Video/VideosPage'
let minWidth = 280
let columnCount = 5
let width
let height = [0, 0, 0, 0, 0]
export default {
  name: 'Homepage',
  components: {VideosPage, VideoCard},
  data () {
    return {
      videos: [
        {
          id: 0,
          videoUrl: './static/1.mp4',
          CountyCoverUrl: '',
          likeNum: 4213978,
          duration: 126,
          times: 2.4,
          title: '成分：磷酸氯钙、去离子水、硫酸铝钙二水合物'
        },
        {
          id: 1,
          videoUrl: './static/2.mp4',
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
        },
        {
          id: 14,
          videoUrl: 'http://s3dzewpfp.hn-bkt.clouddn.com/video/123456/Counter-Strike-Global-Offensive__2023-09-19__16-23-35.mp4?e=1698852815&token=4rdOegZZUy1gurS8qMMI7AZN12p0p62vIaaH08QR:VL43zf5QvBztREdUdkCBl2gpOzY=',
          CountyCoverUrl: '',
          likeNum: 3577,
          duration: 20,
          times: 2.4,
          title: '成分：磷酸氯钙、去离子水、硫酸铝钙二水合物'
        }
      ],
      videoId: -1
    }
  },
  mounted () {
    var that = this
    this.sortVideo()
    window.addEventListener('resize', function () {
      that.sortVideo()
    })
  },
  methods: {
    setVideoId (id) {
      this.$set(this.$data, 'videoId', id)
    },
    sortVideo () {
      let math = this.$math
      height.fill(0, 0, 5)
      columnCount = 5
      while (columnCount) {
        width = math.subtract(math.divide(this.$refs.container.getBoundingClientRect().width, columnCount), 10)
        if (width > minWidth) {
          break
        }
        columnCount--
      }
      for (let i = 0; i < this.$refs.item.length; i++) {
        this.$refs.item[i].style.width = width + 'px'
        var index = this.getMinIndex(height, columnCount)
        this.$refs.item[i].style.left = math.multiply(index, math.add(width, 10)) + 'px'
        this.$refs.item[i].style.top = height[index] + 'px'
        this.$refs.item[i].style.visibility = 'visible'
        height[index] += this.$refs.item[i].getBoundingClientRect().height + 10
        // height[index] += math.add(math.subtract(math.add(this.$refs.item[i].getBoundingClientRect().height, math.multiply(this.videos[i].times, width)), this.$refs.videoCard[i].$refs.video.getBoundingClientRect().height), 10)
      }
      // console.log(height)
    },
    addVideo (start, end) {
      let math = this.$math
      for (let i = start; i < end; i++) {
        this.$refs.item[i].style.width = width + 'px'
        var index = this.getMinIndex(height, columnCount)
        this.$refs.item[i].style.left = math.multiply(index, math.add(width, 10)) + 'px'
        this.$refs.item[i].style.top = height[index] + 'px'
        this.$refs.item[i].style.visibility = 'visible'
        height[index] += this.$refs.item[i].getBoundingClientRect().height
        // height[index] += math.add(math.subtract(math.add(this.$refs.item[i].getBoundingClientRect().height, math.multiply(this.videos[i].times, width)), this.$refs.videoCard[i].$refs.video.getBoundingClientRect().height), 10)
      }
    },
    getMinIndex (height, len) {
      var min = 2147483647
      var index = 0
      for (let i = 0; i < len; i++) {
        if (min > height[i]) {
          min = height[i]
          index = i
        }
      }
      return index
    },
    load () {
      let id = this.videos.length
      let start = id
      let newVideos = [
        {
          id: id++,
          videoUrl: './static/12.mp4',
          CountyCoverUrl: '',
          likeNum: 8064,
          duration: 10,
          times: 1.4,
          title: '哈哈哈哈哈哈哈哈哈哈哈哈'
        },
        {
          id: id++,
          videoUrl: './static/13.mp4',
          CountyCoverUrl: '',
          likeNum: 127764,
          duration: 67,
          times: 2.4,
          title: '防下塔'
        },
        {
          id: id++,
          videoUrl: './static/14.mp4',
          CountyCoverUrl: '',
          likeNum: 3577,
          duration: 20,
          times: 2.4,
          title: '深夜深夜网易云'
        }
      ]
      this.videos = [...this.videos, ...newVideos]
      let that = this
      setTimeout(function () {
        that.addVideo(start, id)
        setTimeout(function () {
          that.sortVideo()
        }, 500)
      }, 0)
    }
  }
}
</script>

<style scoped lang="scss">
*{
  margin: 0;
  padding: 0;
}
#homepage {
  position: relative;
  overflow: hidden;
  width: 100%;
  .VideosPage{
    position:absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  .container{
    overflow: auto;
    position: relative;
    width: 95%;
    height: 100%;
    margin: auto auto;
    //display: grid;
    //column-width: 250px;
    //column-gap: 15px;
  }
  .item {
    //display: inline-block;
    //position: relative;
    //width: 100%;
    //-webkit-column-break-inside: avoid;
    //break-inside: avoid;
    //margin-bottom: 10px;
    //counter-increment: item-counter;
    //position: absolute;
    cursor: pointer;
    visibility: hidden;
    position: absolute;
  }

}
</style>
