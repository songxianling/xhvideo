<template>
  <div class="hello">
    {{msg}}
    <van-button type="default">默认按钮</van-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js 33322'
    }
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
