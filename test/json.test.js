/**
 * @description json test
 * @author yaods
 */

const server = require('./server')
test('json 接口返回格式正确',async () => {
  const res = await server.get('/json')
  /* expect(res.body).toEqual({
    title: 'koa2 json'
  }) */
  expect(res.body.title).toBe('koa2 json')
})