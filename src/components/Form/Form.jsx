import React, { Component } from 'react';
import classes from './Form.module.scss';

export default class Form extends Component {
  constructor(props) {
    super(props);
    /*
     ** this is dynamic then it depends on context and you need to bind
     ** it with the correct reference. For example, this.title is not the same
     ** as the this from this.handleOnChangeTitle
     */
    this.title = '';
    this.text = '';
  }

  _handleOnChangeTitle(event) {
    event.stopPropagation();
    this.title = event.target.value;
  }

  _handleOnChangeText(event) {
    event.stopPropagation();
    this.text = event.target.value;
  }

  createNote(event) {
    event.preventDefault();
    event.stopPropagation();

    this.props.createNote(this.title, this.text);
  }

  render() {
    return (
      <form
        action=""
        className={classes.form}
        onSubmit={this.createNote.bind(this)}
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="title"
          className={classes.input}
          onChange={this._handleOnChangeTitle.bind(this)}
        />
        <textarea
          placeholder="Write your note..."
          name=""
          id=""
          cols={30}
          rows={15}
          className={classes.input}
          onChange={this._handleOnChangeText.bind(this)}
        />
        <button className={classes.submit}>Create note</button>
      </form>
    );
  }
}
