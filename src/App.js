import React, { Component } from 'react';
import Form from './components/Form';
import NoteList from './components/NoteList';
import CategoryList from './components/CategoryList';
import classes from './styles/App.module.scss';
import Categories from './data/Categories';
import ArrayOfNotes from './data/Notes';

/**
 * react -libray
 * React - ecossystem
 */

class App extends Component {
  constructor() {
    super();
    this.categories = new Categories();
    this.notes = new ArrayOfNotes();
  }

  render() {
    return (
      <section className={classes.content}>
        <Form
          categories={this.categories}
          createNote={this.notes.createNote.bind(this.notes)}
        />
        <main className={classes.mainCategories}>
          <CategoryList
            addCategory={this.categories.addCategory.bind(this.categories)}
            categories={this.categories}
          />
          <NoteList
            notes={this.notes}
            deleteNote={this.notes.deleteNote.bind(this.notes)}
          />
        </main>
      </section>
    );
  }
}

export default App;
