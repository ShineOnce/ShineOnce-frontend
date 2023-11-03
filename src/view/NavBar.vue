<template>
  <div id="navbar">
    <div>
    </div>
    <div>
    </div>
    <div class="LoginStatus">
      <LoginStatus></LoginStatus>
    </div>
  </div>
</template>

<script>
import LoginStatus from '../components/Button/LoginStatus'
export default {
  name: 'NavBar',
  components: {LoginStatus}
}
</script>

<style scoped lang="scss">
*{
  margin: 0;
  padding: 0;
}
#navbar {
  width: 100%;
  height: 65px;
  .LoginStatus{
    width: 100px;
    height: 100%;
    float: right;
    margin-right: 15px;
  }
}
</style>
