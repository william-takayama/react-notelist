import React, { Component } from 'react';
import Form from './components/Form';
import NoteList from './components/NoteList';
import CategoryList from './components/CategoryList';
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

  deleteNote(index) {
    let arrayOfNotes = this.state.notes;
    arrayOfNotes.splice(index, 1);
    this.setState({
      notes: arrayOfNotes,
    });
  }

  render() {
    return (
      <section className={classes.content}>
        <Form createNote={this.createNote.bind(this)} />
        <main className={classes.mainCategories}>
          <CategoryList />
          <NoteList
            notes={this.state.notes}
            deleteNote={this.deleteNote.bind(this)}
          />
        </main>
      </section>
    );
  }
}

export default App;
