import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Department from './Department.jsx';
import {
  fetchAll as fetchDepartments, 
  add as addDepartment
} from '../actions/department.js';
import {getDepartments} from '../selectors/departments.js';


export class DepartmentList extends Component{
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    addDepartment: PropTypes.func.isRequired,
    departments: PropTypes.array.isRequired
  }

  constructor(props){
    super(props);
    props.fetch();
  }

  render(){
    return (
      <div className="department-list">
        {this.props.departments.map(department => <Department {...department} key={department.id} />)}
        <button className="departmant-add" onClick={this.props.addDepartment} >Add department</button>
      </div>);
  }
}

const mapStateToProps = state => ({
  departments: getDepartments(state)
});

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(fetchDepartments()),
  addDepartment: () => dispatch(addDepartment())
});

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentList);