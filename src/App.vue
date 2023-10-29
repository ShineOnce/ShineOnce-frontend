<template>
  <div id="app">
    <div class="sidebar">
      <SideBar></SideBar>
    </div>
    <div class="content">
      <NavBar></NavBar>
      <router-view style="height: calc(100% - 65px)"></router-view>
    </div>

  </div>
</template>

<script>
import NavBar from './view/NavBar'
import SideBar from './view/SideBar'
export default {
  name: 'App',
  components: {SideBar, NavBar}
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  font-size: 14px;
}
.scroll{
  overflow: scroll;
}
::-webkit-scrollbar{
  display: none;
}

#app {
  height: 100vh;
  width: 100vw;
  background-color: rgb(22,24,35);
  display: flex;
  .sidebar {
    height: 100%;
    min-width: 45px;
    width: 10%;
    display: inline-block;
  }
  .content {
    height: 100%;
    width: 90%;
    display: inline-block;
  }
}

</style>
