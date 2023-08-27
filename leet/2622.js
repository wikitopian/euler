class TimeLimitedCache {
  constructor() {
    this.cache = new Map();
    this.timeouts = new Map();
  }

  set(key, value, duration) {
    const timeoutId = performance.now();
    this.timeouts.set(key, timeoutId);

    setTimeout(() => {
      if (this.timeouts.get(key) === timeoutId) this.cache.get(key).expired = true;
    }, duration);

    const hadIt = this.cache.has(key);
    this.cache.set(key, {value, duration, expired: false});
    return hadIt;
  }

  get(key) {
    return this.cache.get(key).expired ? -1 : this.cache.get(key).value;
  }

  count() {
    return Array.from(this.cache, ([key, value]) => ({ key, value }))
    .filter((e) => !e.value.expired)
    .length;
  }
}


//  Your TimeLimitedCache object will be instantiated and called as such:
/*
const obj = new TimeLimitedCache();
console.log(obj.set(1, 42, 1000)); // false
console.log(obj.get(1)); // 42
console.log(obj.count()); // 1
*/

const obj = new TimeLimitedCache();
console.log(obj.set(1, 42, 50));
console.log(obj.set(1, 50, 100));
console.log(obj.get(1));
console.log(obj.get(1));
console.log(obj.get(1));
console.log(obj.count());