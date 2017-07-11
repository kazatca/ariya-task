import {OrderedMap, Map} from 'immutable';

import {makeReducer} from '../lib/make-reducer.js';

const reducers = {
  SET_DEPARTMENTS: (_, {departments}) => 
    OrderedMap(departments.map(({id, ...rest}) => [id, Map({...rest})])),
  SET_DEPARTMENT_NAME: (departments, {id, name}) => 
    departments.setIn([id, 'name'], name)
};

export default makeReducer(reducers, OrderedMap());