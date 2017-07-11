import {Map} from 'immutable';

import {makeReducer} from '../lib/reducer-utils.js';

const reducers = {
  SET_NOTIFY: (_, {text}) =>
    Map({text, isOpen: true}),
  CLOSE_NOTIFY: notify =>
    notify.set('isOpen', false)
};

const initState = Map({text: '', isOpen: false});

export default makeReducer(reducers, initState);