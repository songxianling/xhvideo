import * as types from '@/store/mutation-types'

export const userInfo = ({
  commit
}, param) => {
  commit(types.USERINFO, param)
}

export const videoPlay = ({
  commit
}, param) => {
  commit(types.VIDEOPLAY, param)
}
