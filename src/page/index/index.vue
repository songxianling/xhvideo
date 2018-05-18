<template>
  <div class="home">
    <xh-head goBack="true"></xh-head>
    {{userInfo}}
    <van-button size="normal" class="btn" @click="openFate">开启你的巧合</van-button>
  </div>
</template>

<script>
import Head from '@/components/xhHead'
import { Toast } from 'vant'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      msg: '所有的巧合；皆是命中注定～～'
    }
  },
  components: {
    'xh-head': Head
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  created() {
    let that = this
    that.$store.dispatch('userInfo', '所有的巧合；皆是命中注定～～')
    let data = { num: 1 }
    that.$api.apiComPost('/DishMenus/Main2/Dish/getDishList', data, res => {
      console.log(123)
    })
  },
  methods: {
    openFate() {
      Toast.loading({
        mask: true,
        message: '好运开启中...'
      })
    }
  }

}
</script>

<style lang="stylus" scoped>
@import '../../assets/css/xhbase'

.home
  width 100%
  height 100%
  box-sizing border-box
  background #1B9AF7
  color #fff
  .btn
    display block
    margin rpx(30) auto 0
  .top
    width rpx(100)
    height rpx(100)
    background-color pink

</style>
