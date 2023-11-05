<template>
  <div class="UserDataButton">
    <span class="text">
      {{text}}
    </span>
    <span class="data">
      {{nums}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'UserDataButton',
  props: {
    text: '',
    nums: 0
  }
}
</script>

<style scoped lang="scss">
  .UserDataButton{
    height: 100%;
    //width: 100%;
    position: relative;
    .data{
      color: white;
      font-size: 18px;
    }
    .text{
      color: rgba(255,255,255,0.5);
      font-size: 18px;
      font-family: 等线;
    }
  }
</style>
