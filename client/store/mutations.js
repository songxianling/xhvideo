import * as types from '@/store/mutation-types'

const mutations = {
  [types.USERINFO](state, param) {
    state.userInfo = param
  },
  [types.VIDEOPLAY](state, param) {
    state.videoPlay = param
  }
}

export default mutations
