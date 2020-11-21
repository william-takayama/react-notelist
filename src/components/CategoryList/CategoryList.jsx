import React, { Component } from 'react';
import classes from './CategoryList.module.scss';

export default class CategoryList extends Component {
  _handleInputEvent(event) {
    event.preventDefault();
    if (event.key === 'Enter') {
      this.props.addCategory(event.target.value);
    }
  }

  render() {
    return (
      <section>
        <ul className={classes.categoryList}>
          {this.props.categories.map((category, index) => {
            return (
              <li key={index} className={classes.item}>
                {category}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          placeholder="Insert category"
          onKeyUp={this._handleInputEvent.bind(this)}
          className={classes.input}
        />
      </section>
    );
  }
}
