import {Map} from 'immutable';

import {makeReducer} from '../lib/make-reducer.js';

const reducers = {
  SET_NOTIFY: (notify, {text}) =>
    Map({text, isOpen: true}),
  CLOSE_NOTIFY: notify =>
    notify.set('isOpen', false)
};

const initState = Map({text: '', isOpen: false});

export default makeReducer(reducers, initState);