export default class Categories {
  constructor() {
    this.categories = [];
    this._subscribers = [];
  }

  subscribe(fn) {
    this._subscribers.push(fn);
  }

  unsubscribe(fn) {
    this._subscribers = this._subscribers.filter(f => f !== fn);
  }

  notify() {
    this._subscribers.forEach(fn => fn(this.categories));
  }

  addCategory(category) {
    this.categories.push(category);
    this.notify();
  }
}
