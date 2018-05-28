<style lang="stylus">
@import '../../assets/css/xhbase'
.author-page
  .author-head
    width 100%
    height rpx(80)
    line-height rpx(80)
    text-align center
  .author-info
    .con-top
      .author-img
        float left
        width rpx(130)
        height rpx(130)
        margin 0 rpx(40)
        border-radius 50%
      .author-data
        float left
        .item
          display inline-block
          width rpx(100)
          height rpx(80)
          text-align left
        .open-app-btn
          display block
          width rpx(300)
          height rpx(40)
          line-height rpx(40)
          border-radius rpx(10)
          background red
          color #fff
    .author-autograph
      display block
      margin-top rpx(30)
      padding rpx(20)
      text-align left

</style>

<template>
  <div class="author-page">
    <section class="author-head">
      <span>是现令啊7～</span>
    </section>
    <section class="author-info">
      <div class="con-top clearfix">
        <img class="author-img" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1492039276,3695054609&fm=27&gp=0.jpg"/>
        <div class="author-data">
          <div class="item">
            <p>77.7w</p>
            <p>粉丝</p>
          </div>
          <div class="item">
            <p>77.7w</p>
            <p>粉丝</p>
          </div>
          <div class="item">
            <p>77.7w</p>
            <p>粉丝</p>
          </div>
          <a href="javascript:;" class="open-app-btn" @click="openApp">打开APP关注我</a>
        </div>
      </div>
      <p class="author-autograph">这是个性签名这是个性签名这是个性签名这是个性签名这是个性签名这是个性签名，没有不显示</p>
      <div class="con-bot"></div>
    </section>
  </div>
</template>

<script>
/* eslint-disable */
import { callApp } from '@/assets/js/h5CallApp'
export default {
  data() {
    return {

    }
  },
  components: {
  },
  computed: {

  },
  created() {

  },
  mounted () {

  },
  methods: {
    openApp() {
      var isIos = navigator.userAgent.match(/iPhone|iPad|iPod/i)
        var url = isIos ? 'xianghalink://' : 'xiangha://welcome?'
        url += 'showWeb.app?url=' + encodeURIComponent(location.href)
        var h5CallApp = new window.callApp()
        h5CallApp.init({
            appUrl: url,
            waitTime: 3000,
            downLoadUrl: ''
        })
    }
  }

}
</script>
