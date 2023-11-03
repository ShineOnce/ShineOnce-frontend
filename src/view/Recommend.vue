<template>
  <div class="Recommend">
    <VideosPage></VideosPage>
  </div>
</template>

<script>
import VideosPage from '../components/Video/VideosPage'
export default {
  name: 'recommend',
  components: {VideosPage}
}
</script>

<style scoped>
  .Recommend{
    width: 100%;
    height: 100%;
  }
</style>
