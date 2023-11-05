<template>
  <div id="VideoPage" ref="VideoPage">
    <div class="background">
      <div class="content">
        <div class="content-top">
          <div class="video" ref="videoContainer">
            <video class="videoElement video-js"  ref="video">
              <source :src="this.video.videoUrl" type="video/mp4"/>
            </video>
            <div class="close" @click="close" ref="close">
              ×
            </div>
            <div class="right">
              <span @click="$refs.comment.style.width='30%'">
                <VideoButton :icon-class="'iconfont icon-aixin'" class="VideoButton" :count="31321" >
                </VideoButton>
                <VideoButton :icon-class="'el-icon-s-comment'" class="VideoButton" :count="1999" >
                </VideoButton>
              </span>
            </div>
            <div class="ProgressBar" ref="progress_bar">
              <div class="ProgressBar-fill" ref="progress_bar_fill"></div>
              <div class="ProgressBar-drag" ref="progress_bar_drag"></div>
            </div>
          </div>
          <div class="comment" ref="comment">
            <div class="header">
              <div class="btn">
                <span class="left">
                  评论
                </span>
                <span class="right" @click="$refs.comment.style.width = '0'">
                  ×
                </span>
              </div>
            </div>
            <Comments></Comments>
          </div>
        </div>
        <div class="control">
          <div class="left">
            <span class="iconfont icon" @click="videoStatus.isPlay = !videoStatus.isPlay" ref="play">
              {{ this.videoStatus.isPlay ? '&#xe693;' : '&#xe688;' }}
            </span>
            <span>
              {{ duration(this.videoStatus.currentTime) + '/' + duration(this.videoStatus.duration) }}
            </span>
          </div>
          <div class="right">
            <el-dropdown size="small" >
              <span class="iconfont icon">
                &#xe8b7;
              </span>
              <el-dropdown-menu style="background-color: rgb(51,52,63);border: none;" slot="dropdown">
                <el-dropdown-item class="dropdown-item">
                  <span>
                    <el-switch :width="40" active-color="rgb(254,44,85)" v-model="autoNext">
                    </el-switch>
                  </span>
                  <span>自动连播</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span class="iconfont icon" @click="videoStatus.muted = !videoStatus.muted" ref="muted">
              {{ this.videoStatus.muted ? '&#xeca9;' : '&#xe8b8;' }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../../store'
import Comments from '../../view/Comments'
import VideoButton from '../Button/VideoButton'
export default {
  name: 'VideoPage',
  components: {VideoButton, Comments},
  data () {
    return {
      videoStatus: {
        isPlay: false,
        currentTime: '00:00',
        duration: '00:00',
        muted: false
      },
      player: null
    }
  },
  computed: {
    autoNext: {
      get () {
        return store.getters['Video/getAutoNext']
      },
      set (value) {
        store.commit('Video/setAutoNext', value)
      }
    }
  },
  props: {
    video: {},
    close: {
      type: Function,
      require: true,
      default: null
    },
    lastVideo: {
      type: Function,
      require: true,
      default: null
    },
    nextVideo: {
      type: Function,
      require: true,
      default: null
    },
    play: false // 用于父组件控制视频的播放与暂停
  },
  watch: {
    play (newV, oldV) {
      this.videoStatus.isPlay = newV
    },
    'videoStatus.isPlay' (newV, oldV) {
      let that = this
      if (newV) {
        setTimeout(function () {
          that.player.play()
        }, 100)
      } else {
        this.player.pause()
      }
    },
    video (newV, oldV) {
      if (oldV) {
        this.player.src({
          src: newV.videoUrl
        })
      }
    },
    immediate: true,
    depth: true
  },
  methods: {
    GetVideo: function () {
      this.$nextTick(() => {
        let wheelTimer = null
        let ref = this.$refs
        let that = this
        this.player = this.$video(ref.video, {
          controls: false, // 确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
          poster: this.video.CountyCoverUrl, // 封面
          // autoplay: 'unmuted', // 自动播放属性,muted:静音播放
          // preload: '', // 建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
          width: '',
          height: ref.videoContainer.getBoundingClientRect().height
        })
        ref.VideoPage.addEventListener('resize', function () {
          if (ref.VideoPage) {
            that.player.height(ref.videoContainer.getBoundingClientRect().height)
          }
        })
        this.player.on('canplaythrough', function () {
          if (ref.videoContainer) {
            that.player.height(ref.videoContainer.getBoundingClientRect().height)
          }
          that.videoStatus.duration = that.player.duration() // 初始化时长
        })
        this.player.on('ended', function () {
          // 视频播放结束后自动重新播放
          that.player.play()
        })
        this.player.on('timeupdate', updateProgressBar)
        var progressBar = ref.progress_bar
        var progressBarFill = ref.progress_bar_fill
        var progressBarDrag = ref.progress_bar_drag
        // 播放时间
        function updateProgressBar () {
          var percent = (that.player.currentTime() / that.player.duration()) * 100
          that.videoStatus.currentTime = that.player.currentTime()
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
          var newTime = x / progressBar.getBoundingClientRect().width * that.player.duration()
          that.player.currentTime(newTime)
          that.videoStatus.isPlay = true
        })
        ref.VideoPage.addEventListener('mousemove', (ev) => {
          if (drag) {
            var x = ev.clientX - progressBarFill.getBoundingClientRect().left
            if (x !== 0) {
              progressBarDrag.style.left = x + 'px'
              progressBarFill.style.width = x + 'px'
              var newTime = x / ref.VideoPage.getBoundingClientRect().width * that.player.duration()
              that.player.currentTime(newTime)
              that.videoStatus.isPlay = true
            }
          }
        })
        ref.VideoPage.addEventListener('mouseup', ev => {
          drag = false
        })
        // 绑定声音按钮
        ref.muted.addEventListener('click', function () {
          that.player.muted(that.videoStatus.muted)
        })
        // 关闭时暂停播放
        ref.close.addEventListener('click', function () {
          that.player.pause()
        })
        ref.videoContainer.addEventListener('wheel', (ev) => {
          if (ev.deltaY > 0) {
            clearTimeout(wheelTimer)
            wheelTimer = setTimeout(() => {
              this.nextVideo()
            }, 300)
          } else if (ev.deltaY < 0) {
            clearTimeout(wheelTimer)
            wheelTimer = setTimeout(() => {
              this.lastVideo()
            }, 300)
          }
        }, {
          passive: true
        })
      })
    },
    duration (seconds) {
      return String((seconds / 60).toFixed(0)).padStart(2, '0') + ':' + String((seconds % 60).toFixed(0)).padStart(2, '0')
    }
  },
  mounted () {
  },
  created () {
    this.GetVideo()
  }
}
</script>

<style scoped lang="scss">
* {
  user-select: none;
  z-index: 4;
}

#VideoPage {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .background {
    width: 100%;
    height: 100%;
    background-image: url('https://pic1.zhimg.com/v2-c2a53db1e0dd791dd93ce6a397e16cd3_r.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    object-fit: cover;

    .content {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      z-index: 5;
      backdrop-filter: blur(50px);
      background-color: rgba(255, 255, 255, 0.1);
      .content-top{
        position: relative;
        height: 95%;
        width: 100%;
        display: flex;
        .video {
          cursor: pointer;
          position: relative;
          height: 100%;
          width: 100%;
          min-width: 70%;
          box-shadow: inset 0 0 40px 0 rgb(42, 42, 42);
          .videoElement {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
          .right{
            width: 60px;
            position: absolute;
            right: 20px;
            bottom: 0;
            .VideoButton{
              z-index: 10;
            }
          }
          .close {
            height: 60px;
            width: 60px;
            border-radius: 30px;
            background-color: rgba(0, 0, 0, 0.2);
            position: absolute;
            right: 30px;
            top: 30px;
            cursor: pointer;
            font-size: 40px;
            color: rgba(255, 255, 255, 0.2);
            line-height: 60px;
            text-align: center;
            z-index: 10;
          }

          .close:hover {
            background-color: rgba(0, 0, 0, 0.6);
            color: rgba(255, 255, 255, 0.8);
          }
          .ProgressBar {
            z-index: 7;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background-color: rgba(255, 255, 255, 0.3);

            .ProgressBar-fill {
              position: absolute;
              z-index: 8;
              height: 100%;
              width: 0;
              background-color: rgba(255, 255, 255, 0.8);
              pointer-events: none;
            }

            .ProgressBar-drag {
              position: absolute;
              bottom: 2px;
              transform: translate(0, 50%);
              z-index: 2;
              width: 10px;
              height: 10px;
              border-radius: 5px;
              background-color: white;
              cursor: pointer;
            }
          }
        }
        .comment{
          position: relative;
          height: 100%;
          max-width: 30%;
          width: 0;
          background-color: rgba(0,0,0,0.3);
          overflow: hidden;
          transition: width 0.3s;
          .header{
            height: 50px;
            width: 100%;
            border-bottom: rgba(255,255,255,0.2) 1px solid;
            .btn{
              height: 50px;
              line-height: 50px;
              .left{
                color: rgba(255,255,255,0.2);
                font-size: 21px;
                height: calc(100% - 3px);
                padding-left: 10px;
                padding-right: 10px;
                display: inline-block;
                font-weight: 700;
                border-bottom: rgb(254,44,85) 3px solid;
                cursor: pointer;
              }
              .right{
                color: rgba(255,255,255,0.2);
                font-size: 30px;
                height: 100%;
                margin-right: 10px;
                font-weight: 700;
                cursor: pointer;
                float: right;
              }
              .right:hover{
                color: white;
              }
            }
          }
        }
      }
      .control {
        z-index: 5;
        height: 5%;
        width: 100%;
        background-image: linear-gradient(bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1));

        .left {
          position: relative;
          float: left;
          height: 40px;
          top: 50%;
          transform: translate(0, -50%);
          span {
            display: inline-block;
            height: 100%;
            line-height: 40px;
            font-size: 16px;
            color: white;
            margin-left: 20px;
          }
        }

        .right {
          position: relative;
          float: right;
          height: 40px;
          top: 50%;
          transform: translate(0, -50%);
          span {
            display: inline-block;
            height: 100%;
            line-height: 40px;
            font-size: 20px;
            color: white;
            margin-right: 20px;
          }
        }
      }
      .commentDrawer{
        position: absolute;
        background-color: transparent;
      }
    }
  }
}
</style>
