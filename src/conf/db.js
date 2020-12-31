/**
 * @description 存储配置
 * @author yaods
 */

const { isPrd } = require('../utils/env')

let REDIS_CONF = {
  port: 6379,
  host: '127.0.0.1'
}

if (isPrd) {
  REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1'
  } 
}

module.exports = {
  REDIS_CONF
}
