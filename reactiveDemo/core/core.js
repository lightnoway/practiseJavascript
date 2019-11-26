
const { Dep } = require('./dep');
const { Watcher } = require('./watch');
function observe(obj) {
  for (let key of Object.keys(obj)) {
    defineReactive(obj, key);
  }
  return obj;
}
function defineReactive(target, key, { getter, setter } = {}) {
  let { get: _getter, set: _setter } = Object.getOwnPropertyDescriptor(target, key) || {};
  _getter = _getter || getter;
  _setter = _setter || setter;
  let val = target[key];//val 怎么传进来?:传参
  const dep = new Dep();
  Object.defineProperty(target, key, {
    get() {
      dep.depend();
      return _getter ? _getter.call(target) : val;
    },
    set(newVal) {
      if (_setter) {
        _setter.call(target, newVal);
      } else {
        val = newVal;
      }
      dep.notify();
    }
  })
}

function computed(target, key, getter) {
  const watcher = new Watcher(cb);
  function cb() {
    target[key] = watcher.get(getter);
  }
  cb();
  //? 顺序问题，watcher 顺序？避免环调用
}

module.exports = {
  observe,
  computed
};