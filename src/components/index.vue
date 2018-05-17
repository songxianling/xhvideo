<template>
  <div class="hello">
    {{msg}}
    <van-button type="default">{{userInfo}}</van-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js 33322'
    }
  },
  created() {
    let that = this
    that.$store.dispatch('userInfo', 'xiangha')
  },
  computed: {
    ...mapGetters(['userInfo'])
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/css/xhbase';

.hello {
  width: 100%;
  height: rpx(300);
  background: #777777;
}
</style>
