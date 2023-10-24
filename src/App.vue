<template>
  <div id="app">
    <div class="sidebar">
      <SideBar></SideBar>
    </div>
    <div class="content">
      <NavBar></NavBar>
      <router-view/>
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
}
#app {
  height: 100vh;
  width: 100vw;
  background-color: rgba(22,24,35,0.9);
  display: flex;
  .sidebar {
    height: 100%;
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
