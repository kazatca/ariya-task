import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer.js';
import fetch from './lib/fetch-middleware.js';
import App from './components/App.jsx';

const fetchMiddleware = fetch('http://localhost:3000');

const log = store => next => action => {
  if(typeof action == 'function'){
    console.log('action for thunk');
  }
  else{
    console.log('action', action.type, action);
  }
  return next(action);
};

const store = createStore(reducer, applyMiddleware(log, thunk, fetchMiddleware));

window.store = store;

render(
  <App store={store}/>, 
  document.getElementById('app') 
);