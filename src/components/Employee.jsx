import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import InlineEdit from './InlineEdit.jsx';

import {setFirstName, setLastName, remove, setDepartmentId} from '../actions/employee.js';

export class Employee extends Component{
  static propTypes = {
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    setFirstName: PropTypes.func.isRequired,
    setLastName: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    departmentId: PropTypes.string,
    departments: PropTypes.array.isRequired,
    setDepartmentId: PropTypes.func.isRequired
  }

  render(){
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="form-group">
            <label>First name</label>
            <InlineEdit 
              text={this.props.firstName} 
              onChange={this.props.setFirstName}
            />
          </div>  
          <div className="form-group">
            <label>Last name</label>
            <InlineEdit 
              text={this.props.lastName} 
              onChange={this.props.setLastName}
            />
          </div>
          <div className="form-group">
            <label>Department</label>
            <select 
              className="form-control" 
              onChange={({target}) => this.props.setDepartmentId(target.value)} 
              value={this.props.departmentId || "0"}
            >
              <option value={"0"} disabled>--Choose the department--</option>
              {this.props.departments.map(({id, name}) => 
                <option value={id} key={id}>{name}</option>
              )}
            </select>
          </div>
          <button className="btn btn-danger pull-right" onClick={this.props.remove}>
            <i className="glyphicon glyphicon-trash" />
          </button>
        </div>
      </div>);
  }
}

const mapDispatchToProps = (dispatch, {id}) => ({
  setFirstName: firstName => dispatch(setFirstName(id, firstName)),
  setLastName: lastName => dispatch(setLastName(id, lastName)),
  remove: () => dispatch(remove(id)),
  setDepartmentId: departmentId => dispatch(setDepartmentId(id, departmentId))
});

export default connect(null, mapDispatchToProps)(Employee);