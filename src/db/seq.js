/*
 * @Description: 存储配置
 * @Author: yaods
 */

const Sequelize = require('sequelize')
const { MYSQL_CONF } = require('../conf/db')
const { host, user, password, database } = MYSQL_CONF
const { isPrd, isTest} = require('../utils/env')

const conf = {
  host,
  dialect: 'mysql'
}

if (isTest) {
  conf.logging = () => { }
}

// 线上环境使用连接池
if (isPrd) {
  conf.pool = {
    max: 5, // 连接池中最大的连接数量
    min: 0,
    idle: 10000, // 如果一个连接池10s内未使用，则释放
    acquire: 30000 // 30秒未获取到连接就断开
  }
}

const seq = new Sequelize(database, user, password, conf)

module.exports = seq