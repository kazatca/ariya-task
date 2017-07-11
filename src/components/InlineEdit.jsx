import React from 'react';
import PropTypes from 'prop-types';
import InlineEdit from 'react-edit-inline';

const Input = ({className, onChange, ...props}) => 
  <InlineEdit 
    {...props} 
    className={`${className} form-control`}
    activeClassName={`${className} form-control`}
    paramName={'value'}
    change={({value}) => onChange(value)}
  />;

Input.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func
};

export default Input;
