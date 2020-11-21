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
      categories: ['Games', 'Music'],
    };
  }

  createNote(title, text, category) {
    const newNote = { title, text, category };
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

  addCategory(category) {
    const newArrayOfCategories = [...this.state.categories, category];
    const newState = {
      categories: newArrayOfCategories,
    };
    this.setState(newState);
  }

  render() {
    return (
      <section className={classes.content}>
        <Form
          categories={this.state.categories}
          createNote={this.createNote.bind(this)}
        />
        <main className={classes.mainCategories}>
          <CategoryList
            addCategory={this.addCategory.bind(this)}
            categories={this.state.categories}
          />
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
