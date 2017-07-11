import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer.js';
import remote from './lib/remote-middleware.js';
import App from './components/App.jsx';

const remoteMiddleware = remote('http://localhost:3000');

const store = createStore(reducer, applyMiddleware(thunk, remoteMiddleware));

render(
  <App store={store}/>, 
  document.getElementById('app') 
);