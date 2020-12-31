/**
 * @description test demo
 * @author yaods
 */
function sum(a,b) {
  return a + b
}
test('10 + 20 应等于 30',() => {
  const res = sum(10,20)
  expect(res).toBe(30)
})