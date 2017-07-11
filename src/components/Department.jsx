import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import InlineEdit from './InlineEdit.jsx';

import {setName, remove} from '../actions/department.js';
import {departmentIsEmpty} from '../selectors/departments.js';

export class Department extends Component{
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    setName: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    departmentIsEmpty: PropTypes.bool
  }

  render(){
    const {name, setName, remove, departmentIsEmpty} = this.props;
    return (
      <div className="panel panel-default">
        <div className="department panel-body">
          <div className="form-group">
            <label>Department name</label>
            <InlineEdit 
              text={name} 
              onChange={setName}
            />
          </div>
          <button 
            className="remove btn btn-danger pull-right" 
            onClick={remove}
            disabled={!departmentIsEmpty}
            title={!departmentIsEmpty? 'department is not empty': ''}
          >
            <i className="glyphicon glyphicon-trash" />
          </button>
        </div>
      </div>);
  }
}

const mapStateToProps = (state, {id}) => ({
  departmentIsEmpty: departmentIsEmpty(state, id)
});

const mapDispatchToProps = (dispatch, {id}) => ({
  setName: name => dispatch(setName(id, name)),
  remove: () => dispatch(remove(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Department);