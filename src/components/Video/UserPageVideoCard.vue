<template>
  <div class="UserPageVideoCard">
    <div class="VideoContainer" ref="VideoContainer">
      <video class="videoElement video-js" @click="$router.replace('/video/' + video.id) " ref="video">
        <source :src="this.video.videoUrl" type="video/mp4"/>
        <source :src="this.video.videoUrl" type="application/x-mpegURL">
      </video>
      <div class="videoInfo" ref="videoInfo">
        <span class="numsOfLike" >
          <span class="iconfont icon-Heart" style="font-size: 20px;font-weight: 700">
          </span>
          <span style="font-size: 12px">
            {{this.likeNum(this.video.likeNum)}}
          </span>
        </span>
        <span class="duration">
          {{this.duration(this.video.duration)}}
        </span>
      </div>
      <div class="ProgressBar" ref="progress_bar" @click.stop>
        <div class="ProgressBar-fill" ref="progress_bar_fill"></div>
        <div class="ProgressBar-drag" ref="progress_bar_drag"></div>
      </div>
    </div>
    <div class="desc">
      啊和让我看你嗯问问看老师发的你是二位就让我二块五嫩
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserPageVideoCard',
  data () {
    return {
    }
  },
  props: {
    video: {
      videoUrl: '',
      id: 0
    }
  },
  methods: {
    GetVideo: function () {
      this.$nextTick(() => {
        var player = this.$video(this.$refs.video, {
          controls: true, // 确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
          poster: this.video.CountyCoverUrl, // 封面
          // autoplay: 'muted', // 自动播放属性,muted:静音播放
          preload: 'auto', // 建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
          width: '',
          height: this.$refs.VideoContainer.getBoundingClientRect().height,
          // height: this.$math.multiply(this.$refs.videoCard.getBoundingClientRect().width, this.video.times),
          controlBar: {
            children: [
              'playToggle',
              'muteToggle',
              'currentTimeDisplay'
            ]
          }
        })
        var videoContainer = player.el() // 获取视频容器元素
        // 当鼠标进入视频容器时播放视频
        var ref = this.$refs
        // var that = this
        player.on('canplaythrough', function () {
          player.height(ref.VideoContainer.getBoundingClientRect().height)
          // player.height(that.$math.multiply(ref.videoCard.getBoundingClientRect().width, that.video.times))
        })
        videoContainer.addEventListener('mouseenter', function () {
          if (!drag) {
            player.play()
          }
          ref.progress_bar.style.visibility = 'visible' // 播放时显示进度条
          ref.videoInfo.style.visibility = 'hidden' // 播放时隐藏视频信息
          player.controls(true)
        })
        // 当鼠标离开视频容器时暂停播放视频
        videoContainer.addEventListener('mouseleave', function () {
          player.pause()
          player.controls(false)
        })
        player.on('ended', function () {
          // 在视频播放结束后自动重新播放
          player.play()
        })
        player.on('pause', function () {
        })
        // 添加事件处理程序以更新自定义进度条
        player.on('timeupdate', updateProgressBar)
        var progressBar = ref.progress_bar
        var progressBarFill = this.$refs.progress_bar_fill
        var progressBarDrag = this.$refs.progress_bar_drag

        function updateProgressBar () {
          var percent = (player.currentTime() / player.duration()) * 100
          progressBarFill.style.width = percent + '%'
          progressBarDrag.style.left = percent + '%'
        }

        var drag = false
        progressBarDrag.addEventListener('mousedown', ev => {
          drag = true
        })
        progressBar.addEventListener('mousedown', ev => {
          drag = true
          let x = ev.offsetX
          progressBarDrag.style.left = x + 'px'
          progressBarFill.style.width = x + 'px'
          var newTime = x / progressBar.getBoundingClientRect().width * player.duration()
          player.currentTime(newTime)
          player.play()
        })
        this.$refs.VideoContainer.addEventListener('mousemove', (ev) => {
          if (drag) {
            var x = ev.clientX - progressBarFill.getBoundingClientRect().left
            if (x !== 0) {
              progressBarDrag.style.left = x + 'px'
              progressBarFill.style.width = x + 'px'
              var newTime = x / 300 * player.duration()
              player.currentTime(newTime)
              player.play()
            }
          }
        })
        this.$refs.VideoContainer.addEventListener('mouseleave', ev => {
          ref.progress_bar.style.visibility = 'hidden'
          ref.videoInfo.style.visibility = 'visible'
          drag = false
        })
        this.$refs.VideoContainer.addEventListener('mouseup', ev => {
          drag = false
        })
      })
    },
    likeNum (nums) {
      return nums > 10000 ? (nums / 10000).toFixed(1) + '万' : nums
    },
    duration (seconds) {
      return String((seconds / 60).toFixed(0)).padStart(2, '0') + ':' + String(seconds % 60).padStart(2, '0')
    }
  },
  mounted () {
    this.GetVideo()
  }
}
</script>

<style scoped lang="scss">
  .UserPageVideoCard{
    position: relative;
    width: 180px;
    height: 300px;
    .VideoContainer{
      height: 90%;
      background-color: transparent;
      width: 100%;
      position: relative;
      overflow: hidden;
      .videoInfo{
        width: 100%;
        height: 30px;
        background-color: transparent;
        position: absolute;
        z-index: 2;
        bottom: 0px;
        .duration{
          position: absolute;
          margin-right: 5px;
          padding: 3px 5px;
          background-color: rgba(0,0,0,0.7);
          border-radius: 5px;
          color: white;
          font-size: 11px;
          right: 0;
        }
        .numsOfLike{
          position: absolute;
          left: 0;
          margin-left: 5px;
          padding: 3px 5px;
          color: white;
          span{
            display: inline-block;
            position: relative;
            transform: translate(0,-20%);
          }
        }
      }
      .videoElement{
        //position: absolute;
        transform: translate(-50%);
        left: 50%;
      }
      .ProgressBar {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        visibility: hidden;
        background-color: rgba(255, 255, 255, 0.3);
        z-index: 2;
        .ProgressBar-fill {
          height: 100%;
          width: 0;
          background-color: rgba(255, 255, 255, 0.8);
          pointer-events: none;
        }

        .ProgressBar-drag {
          position: absolute;
          bottom: 0;
          transform: translate(0, 50%);
          z-index: 2;
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background-color: #fff;
          cursor: pointer;
        }
      }
    }
    .desc{
      height: 10%;
      width: 100%;
      color: white;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
</style>
