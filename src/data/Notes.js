export default class ArrayOfNotes {
  constructor() {
    this.notes = [];
    this._subscribers = [];
  }

  subscribe(fn) {
    this._subscribers.push(fn);
  }

  unsubscribe(fn) {
    this._subscribers = this._subscribers.filter(f => f !== fn);
  }

  notify() {
    this._subscribers.forEach(fn => fn(this.notes));
  }

  createNote(title, text, category) {
    const newNote = new Note(title, text, category);
    this.notes.push(newNote);
    this.notify();
  }

  deleteNote(index) {
    this.notes.splice(index, 1);
    this.notify();
  }
}

class Note {
  constructor(title, text, category) {
    this.title = title;
    this.text = text;
    this.category = category;
  }
}
