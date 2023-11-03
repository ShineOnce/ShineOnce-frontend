<template>
  <div id="sidebar">
    <div class="favicon">
    </div>
    <div class="content">
      <el-scrollbar style="height: 100%;width: 100%">
        <div class="routerList">
          <ul v-for="route in routes" v-bind:key="route.id">
            <li><SideBarButton :route="route"></SideBarButton></li>
          </ul>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import SideBarButton from '../components/Button/SideBarButton'
export default {
  name: 'SideBar',
  components: {SideBarButton},
  data () {
    return {
      routes: [
        {
          id: 0,
          name: '主页',
          icon: 'icon-Home',
          hoverIcon: 'icon-Home-fill',
          to: '/homepage'
        },
        {
          id: 1,
          name: '推荐',
          icon: 'icon-Fire',
          hoverIcon: 'icon-Fire-fill',
          to: '/recommend'
        },
        {
          id: 2,
          name: '关注',
          icon: 'icon-Heart',
          hoverIcon: 'icon-Heartbeat',
          to: '/follow'
        },
        {
          id: 3,
          name: '朋友',
          icon: 'icon-User-plus',
          hoverIcon: 'icon-User-plus-fill',
          to: '/friend'
        },
        {
          id: 4,
          name: '我的',
          icon: 'icon-User',
          hoverIcon: 'icon-User-fill',
          to: '/user'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
#sidebar {
  height: 100%;
  width: 100%;
  .favicon{
    height: 80px;
    width: 100%;
  }
  .content{
    height: calc(100% - 80px);
    width: 100%;
    .routerList {

    }
  }
}
</style>
