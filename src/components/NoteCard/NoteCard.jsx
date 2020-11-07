import React, { Component } from 'react';
import classes from './NoteCard.module.scss';

export default class NoteCard extends Component {
  render() {
    return (
      <section className={classes.card}>
        <header className={classes.header}>
          <h3 className={classes.title}>Title</h3>
        </header>
        <p className={classes.text}>Write your note</p>
      </section>
    );
  }
}
