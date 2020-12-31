/*
 * @Description: sequelize 同步
 * @Author: yaods
 */
const seq = require('./seq')

// 测试连接
seq.authenticate().then(() => {
  console.log('ok')
}).catch(() => {
  console.log(err)
})

// 执行同步
// force: true 每次都新建表
seq.sync({ force: true }).then(() => {
  console.log('sync ok')
  process.exit()
})