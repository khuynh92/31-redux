import React, { Component } from 'react';
import { connect } from 'react-redux';

import {categoryDestroy, editCurrent} from '../../action/category-actions';

class CategoryItem extends Component {
  render() {
    return (
      <li onDoubleClick={() => this.props.editCurrent(this.props.category)}>
        <button onClick={() => this.props.categoryDestroy(this.props.category)}>x</button>
        <div>
          <h4 className="category-name">{this.props.category.name}</h4>
          <p>${this.props.category.budget}</p>
        </div>
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    categoryDestroy: category => dispatch(categoryDestroy(category)),
    editCurrent: category => dispatch(editCurrent(category)),
  };
};

export default connect(null, mapDispatchToProps)(CategoryItem);