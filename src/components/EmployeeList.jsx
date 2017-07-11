import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Employee from './Employee.jsx';
import {getEmployees} from '../selectors/employees.js';
import {getDepartments} from '../selectors/departments.js';
import {fetchAll as fetchEmployees, add} from '../actions/employee.js';
import {fetchAll as fetchDepartments} from '../actions/department.js';

export class EmployeeList extends Component{
  static propTypes = {
    employees: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired,
    departments: PropTypes.array.isRequired
  }

  constructor(props){
    super(props);
    props.fetch();
  }

  render(){
    return (
      <div className="employee-list">
        {this.props.employees.map(employee => <Employee 
          {...employee} 
          key={employee.id} 
          departments={this.props.departments}
        />)}
        <button className="btn btn-default" onClick={this.props.add}>Add employee</button>
      </div>);
  }
}

const mapStateToProps = state => ({
  employees: getEmployees(state),
  departments: getDepartments(state)
});

const mapDispatchToProps = dispatch => ({
  fetch: () => {
    dispatch(fetchEmployees());
    dispatch(fetchDepartments());
  },
  add: () => dispatch(add())
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);