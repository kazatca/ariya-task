import {Map} from 'immutable';

export const makeReducer = (reducers, initState) => 
  (state = initState, {type, payload}) =>
    type in reducers? reducers[type](state, payload): state;

export const combineReducers = reducers => 
  (state = Map(), action) => 
    Object.keys(reducers).reduce((newState, key) => 
      newState.update(key, state => reducers[key](state, action)),
      state);
  
