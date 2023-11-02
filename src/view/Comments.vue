<template>
  <div class="Comments">
    <div class="info">
      全部评论(1999)
    </div>
    <el-scrollbar style="height: 100%;width: 100%" >
      <div v-for="(comment,index) in rootComments" :key="index" >
        <comment :comment-content="comment.content"
                 :commenter-id="comment.userId"
                 :commenter-time="comment.createTime"
                 :root-comment="true"
                 :index="index"
                 :root-comment-id="comment.id"
                 :showSubComment="showSubComment"
                 :has-child-comment="hasChildComment"
                 :comment-to-user="commentToUser"
                 :to-user-msg=toUserMsg(comment)
                 :commenter-nickname="comment.nickName"
                 :commenter-avatar="comment.avatar"
        />
        <div v-show="showChildComments[index]" v-for="(childComment,index2) in childCommentsList[index]" :key="index2">

          <comment :comment-content="childComment.content"
                   :commenter-id="childComment.userId"
                   :commenter-time="childComment.createTime"
                   :root-comment-id="comment.id"
                   :root-comment="false"
                   :comment-to-user="commentToUser"
                   :to-user-msg=toUserMsg(childComment)
                   :commenter-nickname="childComment.nickName"
                   :commenter-avatar="childComment.avatar"
          />
        </div>
        <div v-show="showChildComments[index]" class="showMore" @click="getSubComment(comment.id,index)" :key="index">
          查看更多
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
import comment from '../components/Comment/Comment'
export default {
  name: 'Comments',
  components: {
    comment
  },
  data () {
    return {
      rootComments: [
        {
          content: 'root_comment1',
          userId: 0,
          createTime: '2023/11/02',
          nickName: 'user1',
          avatar: '../static/OIP-C.jpg',
          toCommentUserId: '-1'
        },
        {
          content: 'root_comment2',
          userId: 1,
          createTime: '2023/11/02',
          nickName: 'user2',
          avatar: '../static/OIP-C.jpg',
          toCommentUserId: '-1'
        },
        {
          content: 'root_comment3',
          userId: 2,
          createTime: '2023/11/02',
          nickName: 'user3',
          avatar: '../static/OIP-C.jpg',
          toCommentUserId: '-1'
        },
        {
          content: 'root_comment4',
          userId: 3,
          createTime: '2023/11/02',
          nickName: 'user4',
          avatar: '../static/OIP-C.jpg',
          toCommentUserId: '-1'
        },
        {
          content: 'root_comment5',
          userId: 4,
          createTime: '2023/11/02',
          nickName: 'user5',
          avatar: '../static/OIP-C.jpg',
          toCommentUserId: '-1'
        }
      ],
      commentsData: [

      ],
      childComments: [

      ],
      childCommentsList: [
        [{
          content: 'root_comment1_childComment1',
          userId: 18,
          createTime: '2023/11/02',
          nickName: 'user19',
          avatar: '../static/OIP-C.jpg',
          toCommentUserId: '-1'
        }, {
          content: 'root_comment1_childComment2',
          userId: 10,
          createTime: '2023/11/02',
          nickName: 'user11',
          avatar: '../static/OIP-C.jpg',
          toCommentUserId: '18'
        }, {
          content: 'root_comment1_childComment3',
          userId: 15,
          createTime: '2023/11/02',
          nickName: 'user16',
          avatar: '../static/OIP-C.jpg',
          toCommentUserId: '-1'
        }],
        [],
        [{
          content: 'root_comment2_childComment1',
          userId: 43,
          createTime: '2023/11/02',
          nickName: 'user44',
          avatar: '../static/OIP-C.jpg',
          toCommentUserId: '-1'
        }, {
          content: 'root_comment2_childComment2',
          userId: 55,
          createTime: '2023/11/02',
          nickName: 'user56',
          avatar: '../static/OIP-C.jpg',
          toCommentUserId: '-1'
        }, {
          content: 'root_comment2_childComment3',
          userId: 26,
          createTime: '2023/11/02',
          nickName: 'user27',
          avatar: '../static/OIP-C.jpg',
          toCommentUserId: '43'
        }],
        [],
        []
      ],
      inputComment: '',
      showChildComments: [
        false, false, false, false, false
      ],
      commentStatus: {
        commentType: 0,
        commentRootId: -1,
        commentToId: -1,
        commentTips: '发布评论'
      },
      userMap: {
        0: 'user1',
        1: 'user2',
        2: 'user3',
        3: 'user4',
        4: 'user5',
        10: 'user11',
        15: 'user16',
        18: 'user19',
        26: 'user27',
        43: 'user44',
        55: 'user56'
      },
      userIdArr: {

      },
      totalPages: 0,
      currentPage: 0
    }
  },
  methods: {
    getComments (page) {
      this.childCommentsList = []
      this.childComments = []
      // getMusicComment(this.musicId, page, 10).then((res) => {
      //   this.commentsData = res.result
      //   this.rootComments = this.commentsData.records
      //   this.totalPages = this.commentsData.pages
      //   // this.userIdArr.push(this.commentsData.records.userId);
      //   for (var i = 0; i < 10; i++) {
      //     if (!this.rootComments[i]) break
      //     this.userMap['' + this.rootComments[i].userId] = this.rootComments[i].nickName
      //     this.userMap.length++
      //     this.showChildComments[i] = false
      //     this.childCommentsList[i] = null
      //     this.getSubComment(this.rootComments[i].id, i, 1)
      //   }
      // })
    },
    getSubComment (rootId, index) {
      var page
      if (this.childCommentsList[index]) {
        if (this.childCommentsList[index].length % 10) { // 没有更多
          return
        }
        page = parseInt(this.childCommentsList[index].length / 10) + 1
      } else page = 1
      console.log(page)

    //   getMusicSubComment(rootId, page, 10).then((res) => {
    //     this.childComments = res.result.records
    //     var len
    //     if (this.childCommentsList[index])len = this.childCommentsList[index].length
    //     else len = 0
    //     for (var i = len; i < len + 10; i++) {
    //       if (!this.childComments[i - len]) break
    //       if (!this.childCommentsList[index]) this.$set(this.childCommentsList, index, [])
    //       this.$set(this.childCommentsList[index], i, null)
    //       this.$set(this.childCommentsList[index], i, this.childComments[i - len])
    //       // this.childCommentsList[index].push(this.childComments[i])
    //     }
    //     // this.$set(this.childCommentsList, index, this.childComments)
    //   })
    },
    showSubComment (index) {
      this.$set(this.showChildComments, index, true)
    },
    hasChildComment (index) {
      if (!this.childCommentsList[index]) return 0
      if (this.childCommentsList[index] && !this.childCommentsList[index]) return 0
      return 1
    },
    commentToUser (rootId, toCommentUserId) {
      this.commentStatus.commentRootId = rootId
      this.commentStatus.commentToId = toCommentUserId
      this.commentStatus.commentTips = '回复@' + toCommentUserId
      document.getElementsByClassName('inputComment')[0].getElementsByTagName('input')[0].focus()
    },
    commentToRoot () {
      this.commentStatus.commentRootId = -1
      this.commentStatus.commentToId = -1
      this.commentStatus.commentTips = '发布评论'
      // console.log(this.userMap)
    },
    toUserMsg: function (comment) {
      if (comment.toCommentUserId === '-1') {
        return ''
      } else {
        return '@' + this.userMap[comment.toCommentUserId]
      }
    }
  }
}
</script>

<style scoped>
  .Comments{
    height: 85%;
    width: 95%;
    margin: auto;
    bottom: 0;
  }
  .info{
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    color: white;
  }
  .showMore{
    position: relative;
    width: 90%;
    text-align: center;
    font-size: 12px;
    height: 30px;
    line-height: 30px;
    cursor: pointer;
    color: white;
  }
</style>
