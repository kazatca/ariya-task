import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {close} from '../actions/notify.js';

const Alert = ({text, isOpen, close}) => {
  if(isOpen){
    return (
      <div 
        className="alert alert-warning alert-dismissible" 
      >
        <button className="close" onClick={close}><i >&times;</i></button>
        {text}
      </div>);
  }
  return null;
};

Alert.propTypes = {
  text: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  text: state.getIn(['notify', 'text']),
  isOpen: state.getIn(['notify', 'isOpen'])
});

const mapDispatchToProps = dispatch => ({
  close: () => dispatch(close())
});

export default connect(mapStateToProps, mapDispatchToProps)(Alert);