<template>
  <div id="sideBarButton" :style="{backgroundColor: $route.path === route.to?'rgba(255,255,255,0.1)':''}">
    <router-link :to="route.to" class="routerLink" >
      <span class="iconfont" :class="this.route.icon" style="font-size: 25px" :style="{color: $route.path === route.to?'rgba(255,255,255,1)':''}"></span>
      <span :style="{color: $route.path === route.to?'rgba(255,255,255,1)':''}">
      {{this.route.name}}
      </span>
    </router-link>

  </div>
</template>

<script>
export default {
  name: 'SideBarButton',
  data () {
    return {
    }
  },
  props: {
    route: {
    }
  }
}
</script>

<style scoped lang="scss">
#sideBarButton {
  position: relative;
  min-width: 45px;
  width: 70%;
  margin: auto;
  border-radius: 10px;
  margin-bottom: 5px;
  .routerLink{
    position: relative;
    display: block;
    width: 70%;
    height: 50%;
    margin: auto;
    span{
      position: relative;
      display: inline-block;
      line-height: 40px;
      color: rgb(139,140,145);
      font-size: 13px;
      text-align: center;
      letter-spacing: 1px;
      text-decoration: none;
    }
  }
}
#sideBarButton:hover {
  background-color: rgba(255,255,255,0.1);
  cursor: pointer;
  span{
    color: rgb(255,255,255);
  }
}
</style>
