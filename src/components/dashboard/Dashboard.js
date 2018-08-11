import React, { Component } from 'react';
import { connect } from 'react-redux';

import CategoryForm from '../category-form/CategoryForm.js';
import CategoryItem from '../category-item/CategoryItem.js';

import { categoryCreate, categoryUpdate, cancelBtn } from '../../action/category-actions.js';

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <CategoryForm buttonText='submit' onComplete={this.props.categoryCreate} />
        <ul>
          {this.props.state.map(category => !category.editing ? <CategoryItem key={category.id} category={category} /> : (
            <React.Fragment key={category.id}>
              <CategoryForm className="editing" buttonText='submit' onComplete={this.props.categoryUpdate} category={category} />
              <button onClick={() => this.props.cancelBtn(category)}>x</button>
            </React.Fragment>
          )
          )}
        </ul>
        {this.props.state.length > 0 && <p id="updateText">* To update a note, double click the note you want to update *</p>}
      </React.Fragment>

    );
  }
}

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  categoryCreate: category => dispatch(categoryCreate(category)),
  categoryUpdate: category => dispatch(categoryUpdate(category)),
  cancelBtn: category => dispatch(cancelBtn(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);