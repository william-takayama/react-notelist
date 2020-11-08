import React, { Component } from 'react';
import Form from './components/Form';
import NoteList from './components/NoteList';
import classes from './assets/App.module.scss';

/**
 * react -libray
 * React - ecossystem
 */

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    };
  }

  createNote(title, text) {
    const newNote = { title, text };
    const newArrayOfNotes = [...this.state.notes, newNote];
    const newState = {
      notes: newArrayOfNotes,
    };
    this.setState(newState);
  }

  render() {
    return (
      <section className={classes.content}>
        <Form createNote={this.createNote.bind(this)} />
        <NoteList notes={this.state.notes} />
      </section>
    );
  }
}

export default App;
