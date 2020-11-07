import React, { Component } from 'react';
import NoteCard from '../NoteCard';
import classes from './NoteList.module.scss';

const list = Array.from(['Job', 'Study', 'Home'], v => v);

export default class NoteList extends Component {
  render() {
    return (
      <ul className={classes.notelist}>
        {list.map((category, index) => (
          <li key={index} className={classes.item}>
            <div className={classes.cardTitle}>{category}</div>
            <NoteCard />
          </li>
        ))}
      </ul>
    );
  }
}
