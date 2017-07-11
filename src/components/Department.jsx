import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import InlineEdit from 'react-edit-inline';

import {setName, remove} from '../actions/department.js';

export class Department extends Component{
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    setName: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
  }

  render(){
    const {name, setName, remove} = this.props;
    return (
      <div className="department">
        <InlineEdit 
          className="department-name" 
          text={name} 
          paramName={'name'}
          change={setName}
        />
        <button className="remove" onClick={remove}>Remove empty department</button>
      </div>);
  }
}

const mapDispatchToProps = (dispatch, {id}) => ({
  setName: ({name}) => dispatch(setName(id, name)),
  remove: () => dispatch(remove(id))
});

export default connect(null, mapDispatchToProps)(Department);