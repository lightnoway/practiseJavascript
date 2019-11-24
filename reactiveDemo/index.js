//可组合
var i1 = { a: 1 };
var i2 = { b: 2 };
var o1 = compute({}, 'c', () => i1.a + i2.b);
//通知回调
watch(o1, 'c', (oldVal, newVal) => {
  console.log("o1.c changed", oldVal, newVal);
})



function computed(getter) {

}
function watch(target,attr,cb){
  
}
//有回调


//todo 可参考： mobx：不可变，响应式状态管理， 网上vue demo 项目， github 关键词搜索









/**
 * vsCode配置 调试当前文件
 */
// {
//   "type": "node",
//   "request": "launch",
//   "name": "debug current file",
//   "program": "${file}"
// }