<style lang="stylus">
@import '../../assets/css/xhbase'
::-webkit-scrollbar
  width 0
::-webkit-scrollbar:horizontal
  height 0
.video-js
  .vjs-big-play-button
    height rpx(100)
    width rpx(100)
    background url('../../assets/images/bf-icon.png') no-repeat
    background-size 100% 100%
    border none
    z-index 101
    .vjs-icon-placeholder:before
      content ''
.home
  width 100%
  height 100%
  box-sizing border-box
  background #1B9AF7
  color #fff
  .video-outer-box
    height rpx(1070)
    .video-player
      width 100%
      height 100%
      .video-js
        width rpx(750)
        height 100%
      .vjs-big-play-button
        top 0
        left 0
        right 0
        bottom 0
        margin auto
    .video-info
      position absolute
      top rpx(400)
      left 0
      width 100%
      height rpx(600)
      background-image: linear-gradient(-180deg, rgba(255,255,255,0.00) 0%, rgba(0,0,0,0.75) 66%);
      .right-video-info
        position absolute
        top rpx(246)
        right rpx(29)
        z-index 100

        .item-info
          width rpx(62)
          margin-bottom rpx(40)
          p
            width rpx(62)
            height rpx(24)
            line-height rpx(24)
            text-align center
            font-size rpx(24)
            color #FFFFFF
          img
            width rpx(62)
          .collection-img
            height rpx(55)
          .comment-img
            height rpx(62)
          .share-img
            height rpx(42)
      .bottom-video-info
        position absolute
        left rpx(28)
        top rpx(329)
        width rpx(568)
        text-align left
        .author-header
          display flex
          align-items center
          text-align center
          .author-img
            width rpx(94)
            height rpx(94)
            border-radius 50%
            border 1px solid #fff
          .author-name
            margin-left rpx(15)
            font-size rpx(36)
            color #fff
          .follow-btn
            margin-left rpx(3)
            width rpx(83)
            height rpx(37)
            line-height rpx(37)
            background #FFDA44
            border-radius rpx(59)
            font-size rpx(22)
        .video-name
          font-size rpx(30)
          color #FFFFFF
          line-height rpx(30)
          margin rpx(25) 0 rpx(14) 0
        .video-desc
          height rpx(104)
          font-size rpx(26)
          color #FFFFFF
          line-height rpx(36)
    .video-inner-bg-btn
      width rpx(200)
      height rpx(200)
  .second-screen-box
    width 100%
    background #1C1C1C
    .author-hot-video
      .title
        position relative
        width 100%
        height rpx(30)
        line-height rpx(30)
        padding rpx(44) 0 rpx(30) 0
        font-size rpx(30)
        color #fff
        font-weight 100
      .hot-list-box
        overflow hidden
        width 100%
        height rpx(320)
      .hot-list-ul
        width 100%
        height rpx(341)
        white-space nowrap
        overflow-x scroll
        // float:left
        overflow-y hidden
        -webkit-overflow-scrolling touch
        li
          position relative
          display inline-block
          width rpx(341)
          height rpx(341)
          .video-img
            width 100%
            height 100%
          .bf-btn
            width rpx(82)
            height rpx(82)
    .recommend-box
      .title
        width 100%
        height rpx(100)
        line-height rpx(100)
        color #333
      .recommend-list
        li
          float left
          width 50%
          height rpx(400)
          .video-img
            width 100%
            height 100%
</style>

<template>

  <div class="home">
    <!-- <xh-head goBack="true"></xh-head>   @click="onPlayerTouch($event)"-->
    <div class="video-outer-box">
      <video-player class="video-player vjs-custom-skin"
                          ref="videoPlayer"
                          :options="playerOptions"
                          :playsinline="true"
                          @play="onPlayerPlay($event)"
                          @pause="onPlayerPause($event)"
                          >
      </video-player>
      <!-- <button class="video-inner-bg-btn ps-center " :class="videoPlay?'hide':'show'">123</button> -->
      <div class="video-info">
        <!-- 右侧视频信息区域 -->
        <div class="right-video-info">
          <div class="item-info" @click="openApp">
            <img src="../../assets/images/collection-icon.png" class="collection-img" alt="">
            <p class="info-num">111</p>
          </div>
          <div class="item-info">
            <img src="../../assets/images/comment-icon.png" class="comment-img" alt="">
            <p class="info-num">111</p>
          </div>
          <div class="item-info">
            <img src="../../assets/images/share-icon.png" class="share-img" alt="">
            <p class="info-num">111</p>
          </div>
        </div>
        <!-- 视频当前底部信息区域 -->
        <div class="bottom-video-info">
          <router-link :to="{path:'/author'}">
            <div class="author-header">
              <img class="author-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526906091431&di=e399d8bb32d05e807ee4f59d3e80af52&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F019df6573b34d56ac7253f9a6b901d.jpg%401280w_1l_2o_100sh.png" alt="">
              <p class="author-name">是现令啊</p>
              <span class="follow-btn">关注</span>
            </div>
          </router-link>
          <p class="video-name ellipsis">@恭喜RNG夺得2018MSI季中赛冠军</p>
          <p class="video-desc">
            恭喜RNG夺得2018MSI季中赛冠军恭喜RNG夺得2018MSI季中赛冠军恭喜RNG夺得2018MSI季中赛冠军
          </p>
        </div>
      </div>
      <div id="ad_u123456"></div>
     </div>
     <!-- 第二屏 -->
     <section class="second-screen-box">
       <!-- 作者热门视频 -->
       <div class="author-hot-video">
          <h3 class="title">
            ───  @恭喜RNG夺得2018MSI季中赛冠军  ───
          </h3>
          <div class="hot-list-box">
            <ul class="hot-list-ul clearfix">
              <li>
                <img class="video-img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=760838121,1565962456&fm=27&gp=0.jpg" alt="">
                <img class="bf-btn ps-center" src="../../assets/images/bf-icon.png" alt="">
              </li>
              <li>
                <img class="video-img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=760838121,1565962456&fm=27&gp=0.jpg" alt="">
                <img class="bf-btn" src="" alt="">
              </li>
              <li>
                <img class="video-img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=760838121,1565962456&fm=27&gp=0.jpg" alt="">
                <img class="bf-btn" src="" alt="">
              </li>
              <li>
                <img class="video-img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=760838121,1565962456&fm=27&gp=0.jpg" alt="">
                <img class="bf-btn" src="" alt="">
              </li>
              <li>
                <img class="video-img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=760838121,1565962456&fm=27&gp=0.jpg" alt="">
                <img class="bf-btn" src="" alt="">
              </li>
            </ul>
          </div>
       </div>
       <!-- 推荐视频 -->
       <div class="recommend-box">
         <h3 class="title">热门推荐</h3>
         <ul class="recommend-list">
            <lazy-component>
              <li>
                <img class="video-img" v-lazy="imgSrc" alt="">
                <img class="bf-btn" src="" alt="">
              </li>
              <li>
                <img class="video-img" v-lazy="imgSrc" alt="">
                <img class="bf-btn" src="" alt="">
              </li>
              <li>
                <img class="video-img" v-lazy="imgSrc" alt="">
                <img class="bf-btn" src="" alt="">
              </li>
              <li>
                <img class="video-img" v-lazy="imgSrc" alt="">
                <img class="bf-btn" src="" alt="">
              </li>
              <li>
                <img class="video-img" v-lazy="imgSrc" alt="">
                <img class="bf-btn" src="" alt="">
              </li>
              <li>
                <img class="video-img" v-lazy="imgSrc" alt="">
                <img class="bf-btn" src="" alt="">
              </li>
              <li>
                <img class="video-img" v-lazy="imgSrc" alt="">
                <img class="bf-btn" src="" alt="">
              </li>
              <li>
                <img class="video-img" v-lazy="imgSrc" alt="">
                <img class="bf-btn" src="" alt="">
              </li>
              <li>
                <img class="video-img" v-lazy="imgSrc" alt="">
                <img class="bf-btn" src="" alt="">
              </li>
              <li>
                <img class="video-img" v-lazy="imgSrc" alt="">
                <img class="bf-btn" src="" alt="">
              </li>
              <li>
                <img class="video-img" v-lazy="imgSrc" alt="">
                <img class="bf-btn" src="" alt="">
              </li>
              <li>
                <img class="video-img" v-lazy="imgSrc" alt="">
                <img class="bf-btn" src="" alt="">
              </li>
              <li>
                <img class="video-img" v-lazy="imgSrc" alt="">
                <img class="bf-btn" src="" alt="">
              </li>
            </lazy-component>
         </ul>
       </div>
     </section>
  </div>
</template>
<script>
import Head from '@/components/xhHead'
import { mapGetters } from 'vuex'
export default {
  metaInfo: {
      title: 'ibuleng', // set a title
      meta: [{ // set meta
        name: 'keyWords',
        content: 'My Example App'
      }],
      link: [{ // set link
        rel: 'asstes',
        href: 'https://assets-cdn.github.com/'
      }]
    },
  data() {
    return {
      imgSrc:
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=760838121,1565962456&fm=27&gp=0.jpg',
      playerOptions: {
        autoplay: false, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '4:3', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: 'video/mp4', // 播放m3u8请替换为 application/x-mpegURL
            src: 'http://7xkwa7.media1.z0.glb.clouddn.com/sample_video_L' // 你的m3u8地址（必填）
          }
        ],
        poster:
          'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-3.jpg',
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true // 全屏按钮
        }
      }
    }
  },
  components: {
    'xh-head': Head
  },
  computed: {
    ...mapGetters(['userInfo', 'videoPlay']),
    player() {
      return this.$refs.videoPlayer.player
    }
  },
  created() {
    let that = this
    that.$store.dispatch('userInfo', '所有的巧合；皆是命中注定～～')
    that.$on('click', () => {
      console.log(123)
    })
    window.slotbydup = window.slotbydup || [].push({
        id: '3030834',
        container: 'ad_u123456'
    })
    let data = { num: 1 }
    that.$api.apiComPost('/users/getUser', JSON.stringify(data), res => {
      console.log(res)
    })
  },
  methods: {
    onPlayerTouch(event) {
      if (this.videoPlay) {
        this.player.pause()
        console.log(document)

        // document.querySelector('.js-big-play-button').classList.add('show')
      } else {
        this.player.play()
      }
    },
    onPlayerPlay(player) {
      this.$store.dispatch('videoPlay', true)
    },
    onPlayerPause(player) {
      this.$store.dispatch('videoPlay', false)
    },
    /* eslint-disable */
    openApp() {
      var isIos = navigator.userAgent.match(/iPhone|iPad|iPod/i);
      var url = isIos ? "xianghalink://" : "xiangha://welcome?";
      url += "showWeb.app?url=" + encodeURIComponent(location.href);
      var h5CallApp = new window.callApp();
      h5CallApp.init({
        appUrl: url,
        waitTime: 3000,
        downLoadUrl: ""
      });
    }
  }
};
</script>
