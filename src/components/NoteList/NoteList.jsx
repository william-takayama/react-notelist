import React, { Component } from 'react';
import NoteCard from '../NoteCard';
import classes from './NoteList.module.scss';

// const list = Array.from(['Job', 'Study', 'Home'], v => v);

export default class NoteList extends Component {
  constructor() {
    super();
    this.state = { notes: [] };
    this._newNotes = this._newNotes.bind(this);
  }

  componentDidMount() {
    this.props.notes.subscribe(this._newNotes);
  }

  componentWillUnmount() {
    this.props.notes.unsubscribe(this._newNotes);
  }

  _newNotes(notes) {
    this.setState({ ...this.state.notes, notes });
  }

  render() {
    return (
      <ul className={classes.notelist}>
        {this.state.notes.map((note, index) => (
          <li key={index} className={classes.item}>
            <NoteCard
              index={index}
              title={note.title}
              text={note.text}
              deleteNote={this.props.deleteNote}
              category={note.category}
            />
          </li>
        ))}
      </ul>
    );
  }
}
