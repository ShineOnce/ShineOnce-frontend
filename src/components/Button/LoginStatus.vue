<template>
  <div class="LoginStatus">
    <div class="LoginButton">
      <span @click="$refs.Login.display()">登录</span>
    </div>
    <Login ref="Login"></Login>
  </div>
</template>

<script>
import Login from '../../view/MyLogin'
export default {
  name: 'LoginStatus',
  components: {Login}
}
</script>

<style scoped lang="scss">
  .LoginStatus{
    height: 100%;
    width: 100%;
    position: relative;
    .LoginButton{
      height: 60%;
      width: 70%;
      position: relative;
      top: 50%;
      left: 50%;
      border-radius: 10px;
      transform: translate(-50%,-50%);
      background-color: rgb(254,44,85);
      cursor: pointer;
      span{
        position: relative;
        display: inline-block;
        top: 50%;
        left: 50%;
        font-size: 16px;
        color: white;
        transform: translate(-50%,-50%);
      }
    }
    .LoginButton:hover{
      background-color: rgb(210,27,70);
    }
  }
</style>
