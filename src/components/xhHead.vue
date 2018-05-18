<template>
  <header class="xh-com-head" :style="{color:color,background:bgColor}">
    <span class="goBack" v-if="goBack" @click="funGoBack()"><i>返回</i></span>
    <span class="title">{{titleHead}}</span>
  </header>
</template>

<script>

  export default {
    props: {
      goBack: {
        default: false
      },
      titleHead: {
        type: String,
        default: '命中注定'
      },
      color: {
        type: String,
        default: '#333'
      },
      bgColor: {
        type: String,
        default: '#fff'
      }
    },
    methods: {
      // 返回上一页
      funGoBack() {
          this.$router.go(-1)
      }
    }
  }
</script>
<style lang="stylus" scoped>
@import '../assets/css/xhbase'
  .xh-com-head
    position relative
    text-align center
    line-height rpx(80)
    padding 0 rpx(20)
    margin-bottom rpx(80)
    .goBack, .more
      position absolute
      i
        font-size rpx(30)
    .goBack
      left rpx(10)
    .title
      flex 1
      font-size rpx(30)
      font-weight bold
      text-align center
    .more
      right rpx(15)

</style>
