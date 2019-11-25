const assert = require('assert');
const { observe, computed } = require('./core/core');

//可组合
var o = observe({ a: 1, b: 2, c: null });
computed(o, 'c', () => o.a + o.b);
console.log('c=a+b');
assert.equal(o.c, 3);
o.a = 5;
console.log('c change after a change');
assert.equal(o.c, o.a + o.b, 'c change after a change');

//通知回调
// watch(o1, 'c', (oldVal, newVal) => {
//   console.log("o1.c changed", oldVal, newVal);
// })
// console.log(o1.c)

//有回调


//todo 可参考： mobx：不可变，响应式状态管理， 网上vue demo 项目， github 关键词搜索









/**
 * vsCode配置 调试当前文件
 */
// {
//   "type": "node",
//   "request": "launch",
//   "name": "debug current file",
//   "program": "${file}",
// "skipFiles": ["<node_internals>/**"],

// }