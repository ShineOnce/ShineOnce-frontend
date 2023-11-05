<template>
  <div class="UserPostPage infinite-list" v-infinite-scroll="getVideos" infinite-scroll-distance="10" >
    <div class="UserPageVideo" v-for="(video, i) in videos" :key="i">
      <UserPageVideoCard :video="video"></UserPageVideoCard>
    </div>
  </div>
</template>

<script>
import UserPageVideoCard from '../../components/Video/UserPageVideoCard'
export default {
  name: 'UserPostPage',
  components: {UserPageVideoCard},
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
          videoUrl: './static/4.mp4',
          CountyCoverUrl: '',
          likeNum: 3577,
          duration: 20,
          times: 2.4,
          title: '成分：磷酸氯钙、去离子水、硫酸铝钙二水合物'
        }
      ]
    }
  },
  methods: {
    getVideos () {
      let id = this.videos.length + 1
      let newVideos = [
        {
          id: id++,
          videoUrl: './static/4.mp4',
          CountyCoverUrl: '',
          likeNum: 3577,
          duration: 20,
          times: 2.4,
          title: '成分：磷酸氯钙、去离子水、硫酸铝钙二水合物'
        },
        {
          id: id++,
          videoUrl: './static/4.mp4',
          CountyCoverUrl: '',
          likeNum: 3577,
          duration: 20,
          times: 2.4,
          title: '成分：磷酸氯钙、去离子水、硫酸铝钙二水合物'
        },
        {
          id: id++,
          videoUrl: './static/4.mp4',
          CountyCoverUrl: '',
          likeNum: 3577,
          duration: 20,
          times: 2.4,
          title: '成分：磷酸氯钙、去离子水、硫酸铝钙二水合物'
        },
        {
          id: id++,
          videoUrl: './static/4.mp4',
          CountyCoverUrl: '',
          likeNum: 3577,
          duration: 20,
          times: 2.4,
          title: '成分：磷酸氯钙、去离子水、硫酸铝钙二水合物'
        },
        {
          id: id++,
          videoUrl: './static/4.mp4',
          CountyCoverUrl: '',
          likeNum: 3577,
          duration: 20,
          times: 2.4,
          title: '成分：磷酸氯钙、去离子水、硫酸铝钙二水合物'
        }
      ]
      this.videos.push(newVideos[0])
      this.videos.push(newVideos[1])
      this.videos.push(newVideos[2])
      this.videos.push(newVideos[3])
      this.videos.push(newVideos[4])
    }
  }
}
</script>

<style scoped lang="scss">
  .UserPostPage{
    width: 100%;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    .UserPageVideo{
      display: inline-block;
      position: relative;
      width: 180px;
      height: 300px;
      margin: 10px;
    }
  }
</style>
