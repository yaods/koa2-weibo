/*
 * @Description: 存储配置
 * @Author: yaods
 */

const { isPrd } = require('../utils/env')

let REDIS_CONF = {
  port: 6379,
  host: '127.0.0.1'
}

let MYSQL_CONF = {
  host: '127.0.0.1',
  user: 'root',
  password:'123456',
  port: '3306',
  database: 'koa2_wb_db'
}

if (isPrd) {
  REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1'
  },
  MYSQL_CONF = {
    host: '127.0.0.1',
    user: 'root',
    password:'123456',
    port: '3306',
    database: 'koa2_wb_db'
  }
}

module.exports = {
  REDIS_CONF,
  MYSQL_CONF
}
