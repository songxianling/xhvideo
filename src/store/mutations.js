import * as types from '@/store/mutation-types'

const mutations = {
  [types.USERINFO](state, param) {
    state.userInfo = param
  }
}

export default mutations
