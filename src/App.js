import React, { Component } from 'react';
import Form from './components/Form';
import NoteList from './components/NoteList';
import classes from './assets/App.module.scss';

/**
 * react -libray
 * React - ecossystem
 */

class App extends Component {
  render() {
    return (
      <section className={classes.content}>
        <Form />
        <NoteList />
      </section>
    );
  }
}

export default App;
