import React, { Component } from 'react';
import classes from './CategoryList.module.scss';

export default class CategoryList extends Component {
  constructor() {
    super();
    this.state = { categories: [] };
    this.inputEntry = '';
    this._newCategories = this._newCategories.bind(this);
  }

  componentDidMount() {
    this.props.categories.subscribe(this._newCategories);
  }

  componentWillUnmount() {
    this.props.categories.unsubscribe(this._newCategories);
  }

  _newCategories(categories) {
    this.setState({ ...this.state, categories });
  }

  _handleInputEvent(event) {
    event.preventDefault();

    if (event.key === 'Enter') {
      this.props.addCategory(event.target.value);
      document.getElementById('category-input').value = '';
    }
  }

  render() {
    return (
      <section className={classes.sectionList}>
        <ul className={classes.categoryList}>
          {this.state.categories.map((category, index) => {
            return (
              <li key={index} className={classes.item}>
                {category}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          name="category"
          id="category-input"
          placeholder="Insert some category"
          onKeyUp={this._handleInputEvent.bind(this)}
          className={classes.input}
        />
      </section>
    );
  }
}
