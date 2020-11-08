import React, { Component } from 'react';
import classes from './NoteCard.module.scss';

export default class NoteCard extends Component {
  render() {
    return (
      <section className={classes.card}>
        <header className={classes.header}>
          <h3 className={classes.title}>{this.props.title}</h3>
        </header>
        <p className={classes.text}>{this.props.text}</p>
      </section>
    );
  }
}
