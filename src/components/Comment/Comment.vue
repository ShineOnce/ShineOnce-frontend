<template>
  <div style="width: 100%;position: relative">
    <div :class="commentStyle">
      <div class="comment-left">
        <router-link to="">
          <div class="avatar-border">
            <img height="40" width="40" :src="commenterAvatar">
          </div>
        </router-link>

      </div>
      <div class="comment-right">
        <router-link to="">
          <div class="commenter-nickName">
            {{ commenterNickname }}：
          </div>
        </router-link>

        <div class="comment-content">
          <span style="display: inline-block;background-color: rgba(102,102,102,0.2);height: 80%;border-radius: 5px;padding: 1px">
            {{toUserMsg}}
          </span>
          {{ commentContent }}
        </div>
        <div class="comment-status">
          {{ commenterTime }}
          <span style="margin-left: 20px;cursor: pointer" @click="commentToUser(rootCommentId,commenterId)">
            回复
          </span>
          <span style="margin-left: 20px;cursor: pointer" @click="showSubComment(index)" v-show="rootComment&&hasChildComment(index)">
            查看回复
          </span>
        </div>
      </div>
    </div>

  </div>

</template>

<script>

export default {
  name: '',
  props: {
    commentContent: '',
    commenterNickname: '',
    commenterTime: '',
    rootComment: false,
    commenterAvatar: '',
    commenterId: '',
    index: 0,
    rootCommentId: '',
    showSubComment: {
      type: Function,
      require: true,
      default: null
    },
    hasChildComment: {
      type: Function,
      require: true,
      default: null
    },
    commentToUser: {
      type: Function,
      require: true,
      default: null
    },
    toUserMsg: ''
  },
  computed: {
    commentStyle: function () {
      return this.rootComment === true ? 'root-comment' : 'child-comment'
    }
  },
  methods: {
    getUserData () {
      // getUserById(this.commenterId).then((res)=>{
      //
      // })
    }
  },
  mounted () {
    this.getUserData()
  }
}
</script>

<style scoped lang="scss">
.comment{
  position: relative;
  width: 100%;
  background-color: white;
  display: flex;
}
.root-comment{
  position: relative;
  width: 100%;
  /*background-color: white;*/
  display: flex;
  scale: 1 1;
  margin-bottom: 10px;
}
.child-comment{
  position: relative;
  width: 100%;
  /*background-color: white;*/
  display: flex;
  scale: 0.8;
  /*margin-bottom: -30px;*/
  /*transform: translate(0,-20%);*/
}
.comment-left{
  width: 40px;
  height: 40px;
  display: inline-block;
}
.comment-right{
  width: 100%;
  display: inline-block;
  font-size: 20px;
}
.avatar-border{
  height: 40px;
  width: 40px;
  border-radius: 20px;
  overflow-x: hidden;
  color: white;
}
.commenter-nickName{
  height: 25px;
  width: 95%;
  margin: auto;
  line-height: 20px;
  font-size: 18px;
  font-family: 'standard5',serif;
  color: rgba(255,255,255,0.5);
}
.comment-content{
  width: 95%;
  margin: auto;
  font-size: 18px;
  padding: 5px;
  text-align: left;
  line-height: 30px;
  letter-spacing: 2px;
  font-family: 'standard2',serif;
  color: white;
}
.comment-status{
  height: 20px;
  width: 95%;
  margin: auto;
  font-size: 12px;
  line-height: 25px;
  color: rgba(255,255,255,0.5);
}
</style>
