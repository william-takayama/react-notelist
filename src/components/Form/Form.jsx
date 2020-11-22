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
    this.category = 'No category';
    this.state = { categories: [] };
    this._newCategories = this._newCategories.bind(this);
  }

  componentDidMount() {
    this.props.categories.subscribe(this._newCategories);
  }

  componentWillUnmount() {
    this.props.categories.unsubscribe(this._newCategories);
  }

  _newCategories(categories) {
    this.setState({ ...this.state.categories, categories });
  }

  _handleOnChangeTitle(event) {
    event.stopPropagation();
    this.title = event.target.value;
  }

  _handleOnChangeText(event) {
    event.stopPropagation();
    this.text = event.target.value;
  }

  _handleOnChangeCategory(event) {
    event.stopPropagation();
    this.category = event.target.value;
  }

  _createNote(event) {
    event.preventDefault();
    event.stopPropagation();

    this.props.createNote(this.title, this.text, this.category);
  }

  render() {
    return (
      <form className={classes.form} onSubmit={this._createNote.bind(this)}>
        <select
          onChange={this._handleOnChangeCategory.bind(this)}
          className={classes.input}
          name="category-input"
        >
          <option defaultChecked value="No category">
            {this.category}
          </option>
          {this.state.categories.map((category, index) => {
            return (
              <option key={index} value={category}>
                {category}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          placeholder="title"
          className={classes.input}
          onChange={this._handleOnChangeTitle.bind(this)}
        />
        <textarea
          placeholder="Write your note..."
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
