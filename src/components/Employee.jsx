import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import InlineEdit from 'react-edit-inline';

import {setFirstName, setLastName, remove} from '../actions/employee.js';

export class Employee extends Component{
  static propTypes = {
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    setFirstName: PropTypes.func.isRequired,
    setLastName: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
  }

  render(){
    const {
      firstName, lastName, 
      setFirstName, setLastName,
      remove
    } = this.props;
    
    return (
      <div className="employee">
        <InlineEdit 
          className="first-name" 
          text={firstName} 
          paramName={'firstName'}
          change={setFirstName}
        />
        <InlineEdit 
          className="last-name" 
          text={lastName} 
          paramName={'lastName'}
          change={setLastName}
        />
        <button className="remove" onClick={remove}>Remove employee</button>
      </div>);
  }
}

const mapDispatchToProps = (dispatch, {id}) => ({
  setFirstName: ({firstName}) => dispatch(setFirstName(id, firstName)),
  setLastName: ({lastName}) => dispatch(setLastName(id, lastName)),
  remove: () => dispatch(remove(id))
});

export default connect(null, mapDispatchToProps)(Employee);