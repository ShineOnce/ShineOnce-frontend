<template>
  <div class="UserPage">
    <el-scrollbar style="height: 100%;width: 100%;position: relative">
      <div class="center">
        <div class="BaseInfoContainer">
          <div class="container">
            <div class="AvatarContainer">
              <div class="img">
                <img width="120" height="120" :src="'../static/OIP-C.jpg'">
              </div>
            </div>
            <div class="UserInfoContainer">
              <div class="UserName">
                <span>
                  哆啦A梦
                </span>
                <span>
                  <UserDataButton class="UserDataButton" :text="'关注'" :nums="132"></UserDataButton>
                  <span style="display: inline-block;font-size: 14px;color: rgba(255,255,255,0.1)">|</span>
                  <UserDataButton class="UserDataButton" :text="'粉丝'" :nums="12983"></UserDataButton>
                </span>
              </div>
              <div class="UserData">

              </div>
              <div class="UserDesc">
                练习时长两年半的前端练习生，欢迎关注！
              </div>
            </div>
            <div class="ButtonGroupContainer">
              <div>
                <span class="follow">关注</span>
                <span class="message">私信</span>
              </div>
            </div>
          </div>
        </div>
        <div class="RouterLinkContainer">
          <router-link to="/user/post" class="RouterLink">
            <span class="RouterButton" :style="{color:$route.path==='/user/post'?'white':'rgb(255,255,255,0.5'}">作品 1231</span>
          </router-link>
          <router-link to="/user/like" class="RouterLink">
            <span class="RouterButton" :style="{color:$route.path==='/user/like'?'white':'rgb(255,255,255,0.5'}">喜欢</span>
          </router-link>
          <router-link to="/user/collect" class="RouterLink">
            <span class="RouterButton" :style="{color:$route.path==='/user/collect'?'white':'rgb(255,255,255,0.5'}">收藏</span>
          </router-link>
        </div>
        <div class="RouterViewContainer">
          <router-view>
          </router-view>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
import UserDataButton from '../../components/Button/UserDataButton'
export default {
  name: 'UserPage',
  components: {UserDataButton},
  mounted () {
    this.$router.replace('/user/post')
  }
}
</script>

<style scoped lang="scss">
  .UserPage{
    position: relative;
    width: 100%;
    height: 100%;
    .center{
      position: relative;
      width: 75%;
      min-height: calc(100vh - 65px);
      left: 50%;
      //background-color: rgba(0,0,0,0.1);
      transform: translate(-50%);
      .BaseInfoContainer{
        //height: 200px;
        //background-color: rgba(0,0,0,0.1);
        .container{
          //height: 150px;
          width: 100%;
          //background-color: rgba(0,0,0,0.1);
          display: flex;
          flex-wrap: wrap;
          position: relative;
          align-items: flex-end;
          .AvatarContainer{
            height: 150px;
            width: 120px;
            max-width: 150px;
            float: left;
            //background-color: rgba(0,0,0,0.1);
            .img{
              height: 120px;
              width: 120px;
              position: relative;
              border-radius: 60px;
              top: 50%;
              transform: translate(0,-50%);
              overflow: hidden;
            }
            margin-right: 30px;
          }
          .UserInfoContainer{
            height: 150px;
            width: calc(70% - 150px);
            min-width: 300px;
            //background-color: rgba(0,0,0,0.1);
            float: left;
            .UserName{
              height: 40px;
              line-height: 40px;
              span{
                color: white;
                font-size: 24px;
                font-weight: 400;
                display: block;
                .UserDataButton{
                  display: inline-block;
                }
              }
            }
            .UserData{
              height: 50px;
              line-height: 50px;
            }
            .UserDesc{
              height: 30px;
              line-height: 30px;
              font-size: 12px;
              color: white;
            }
          }
          .ButtonGroupContainer{
            position: relative;
            height: 40px;
            width: 30%;
            min-width: 250px;
            //background-color: rgba(0,0,0,0.1);
            span{
              display: inline-block;
              height: 40px;
              width: 90px;
              border-radius: 5px;
              text-align: center;
              line-height: 40px;
              color: white;
              font-size: 16px;
            }
            .follow{
              background-color:  rgb(254,44,85);
            }
            .follow:hover{
              background-color: rgb(210,27,70);
            }
            .message{
              background-color: rgb(39,41,51);
            }
            .message:hover{
              background-color: rgb(48,50,61);
            }
          }
        }

      }
      .RouterLinkContainer{
        height: 60px;
        margin-top: 10px;
        width: 100%;
        //background-color: rgba(0,0,0,0.1);
        border-bottom: rgb(31,34,44) 1px solid;
        .RouterLink{
          position: relative;
          display: inline-block;
          height: 100%;
          //width: 70px;
          .RouterButton{
            width: 100%;
            height: 100%;
            line-height: 60px;
            text-align: center;
            display: inline-block;
            color: rgba(255,255,255,0.5);
            font-size: 20px;
            margin-right: 50px;
          }
        }
      }
      .RouterViewContainer{
        width: 100%;
      }
    }
  }
</style>
