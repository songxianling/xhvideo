<template>
  <div class="ibuleng-wrap" id="ibuleng-wrap">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'ibuleng'
}
</script>

<style lang="stylus" scoped>
 #ibuleng-wrap
  width 100%
  height 100%
</style>
