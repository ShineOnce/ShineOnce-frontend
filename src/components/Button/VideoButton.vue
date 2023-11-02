<template>
  <div class="VideoButton">
    <div class="top">
      <span>
        <i :class="iconClass"></i>
      </span>
    </div>
    <div class="bottom">
      <span>{{count}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoButton',
  props: {
    iconClass: '',
    count: 0
  }
}
</script>

<style scoped lang="scss">
  .VideoButton{
    width: 100%;
    margin-bottom: 20px;
    .top{
      height: 40px;
      width: 100%;
      margin: auto;
      span{
        position: relative;
        display: inline-block;
        width: 50px;
        height: 40px;
        font-size: 30px;
        color: white;
        left: 50%;
        transform: translate(-50%);
        i{
          position: relative;
          font-size: 30px;
          left: 50%;
          transform: translate(-50%);
        }
      }
    }
    .bottom{
      height: 20px;
      width: 100%;
      span{
        display: inline-block;
        width: 100%;
        height: 20px;
        line-height: 20px;
        text-align: center;
        font-size: 16px;
        color: white;
      }
    }
  }
</style>
