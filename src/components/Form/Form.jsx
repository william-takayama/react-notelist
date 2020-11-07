import React, { Component } from 'react';
import classes from './Form.module.scss';

export default class Form extends Component {
  constructor() {
    super();
    /*
     ** this is dynamic then it depends on context and you need to bind
     ** it with the correct reference. For example, this.title is not the same
     ** as the this from this.handleOnChangeTitle
     */
    this.title = '';
  }

  handleOnChangeTitle(event) {
    this.title = event.target.value;
  }

  render() {
    return (
      <form action="" className={classes.form}>
        <input
          type="text"
          name=""
          id=""
          placeholder="title"
          className={classes.input}
          onChange={this.handleOnChangeTitle.bind(this)}
        />
        <textarea
          placeholder="Write your note..."
          name=""
          id=""
          cols={30}
          rows={15}
          className={classes.input}
        />
        <button className={classes.submit}>Create note</button>
      </form>
    );
  }
}
