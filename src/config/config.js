/* eslint-disable no-undef */
if (!__buildEnv__) {
  __buildEnv__ = 'dev'
}

const {
  PROTOCOL,
  HOST,
  PORT
} = require(`./config.${__buildEnv__}`)

export const basicConfig = {
  BASE_DATA_HOST: `${PROTOCOL}//${HOST}${PORT}`
}
