
let depId = 0
class Dep {
  constructor() {
    this.id = depId++;
    this.subs = [];
  }
  addSub(watcher) {
    this.subs.push(watcher);
  }
  removeSub(watcher) {
    const index = this.subs.indexOf(watcher);
    if (index > -1) {
      this.subs.splice(index, 1);
    }
  }
  depend() {
    if (Dep.target) {
      Dep.target.AddDep(this);
    }
  }
  notify() {
    console.log('notify', this.id);
    for (let watcher of this.subs) {
      watcher.cb();
    }
  }
}
Dep.target = null;
const watcherStack = [];
function pushWatcher(watcher) {
  watcherStack.push(watcher);
  Dep.target = watcher;
}
function popWatcher() {
  watcherStack.pop();
  Dep.target = watcherStack[watcherStack.length - 1];
}
module.exports = {
  Dep,
  pushWatcher,
  popWatcher
};