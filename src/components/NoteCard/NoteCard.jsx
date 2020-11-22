import React, { Component } from 'react';
import classes from './NoteCard.module.scss';
import cn from 'clsx';
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
          <h6 className={classes.title}>{this.props.title}</h6>
          <h6 className={cn(classes.text, classes.category)}>
            {this.props.category}
          </h6>
          <DeleteSVG
            onClick={this.delete.bind(this)}
            style={{
              fill: 'var(--color-contrast)',
              width: 'var(--size-small)',
              flex: '0 0 auto',
              cursor: 'pointer',
            }}
          />
        </header>
        <p className={cn(classes.text, classes.description)}>
          {this.props.text}
        </p>
      </section>
    );
  }
}
