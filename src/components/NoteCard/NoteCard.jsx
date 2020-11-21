import React, { Component } from 'react';
import classes from './NoteCard.module.scss';
import { ReactComponent as DeleteSVG } from '../../assets/img/delete.svg';

export default class NoteCard extends Component {
  delete() {
    const index = this.props.index;
    this.props.deleteNote(index);
  }

  render() {
    return (
      <section className={classes.card}>
        <header className={classes.header}>
          <DeleteSVG
            onClick={this.delete.bind(this)}
            style={{
              fill: 'var(--color-contrast)',
              width: 'var(--size-small)',
            }}
          />
        </header>
        <p className={classes.text}>{this.props.text}</p>
      </section>
    );
  }
}
