import React, { Component } from 'react';
import NoteCard from '../NoteCard';
import classes from './NoteList.module.scss';

// const list = Array.from(['Job', 'Study', 'Home'], v => v);

export default class NoteList extends Component {
  render() {
    return (
      <ul className={classes.notelist}>
        {this.props.notes.map((note, index) => (
          <li key={index} className={classes.item}>
            <div className={classes.cardTitle}>{note.title}</div>
            <NoteCard
              index={index}
              title={note.title}
              text={note.text}
              deleteNote={this.props.deleteNote}
            />
          </li>
        ))}
      </ul>
    );
  }
}
