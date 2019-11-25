const { pushWatcher, popWatcher } = require('./dep');
let uid = 0;
class Watcher {
  constructor(cb) {
    this.id = uid++;
    this.cb = cb;
    this.deps = [];
    this.depIds = new Set();
    this.newDeps = [];//命名参考
    this.newDepIds = new Set();
  }
  AddDep(dep) {
    const { newDeps, newDepIds, depIds } = this;
    if (!newDepIds.has(dep.id)) {
      newDepIds.add(dep.id);
      newDeps.push(dep);
      if (!depIds.has(dep.id)) {
        dep.addSub(this);
      }
    }
  }
  get(getter) {
    pushWatcher(this);
    try {
      return getter();
    } finally {
      popWatcher();
      this.clearDep();
    }
  }
  clearDep() {
    let tmp = this.deps;
    for (let dep of tmp) {
      if (!this.newDepIds.has(dep.id)) {
        dep.removeDep(this);
      }
    }
    this.deps = this.newDeps;
    tmp.length = 0;
    this.newDeps = tmp;

    tmp = this.depIds;
    this.depIds = this.newDepIds;
    tmp.clear();
    this.newDepIds = tmp;
  }
}
module.exports = {
  Watcher
};