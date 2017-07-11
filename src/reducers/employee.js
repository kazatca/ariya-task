import {OrderedMap, Map} from 'immutable';

import {makeReducer} from '../lib/make-reducer.js';

const reducers = {
  SET_EMPLOYEES: (_, {employees}) => 
    OrderedMap(employees.map(({id, ...rest}) => [id, Map({...rest})])),
  SET_EMPLOYEE_FIRST_NAME: (employees, {id, firstName}) => 
    employees.setIn([id, 'firstName'], firstName),
  SET_EMPLOYEE_LAST_NAME: (employees, {id, lastName}) => 
    employees.setIn([id, 'lastName'], lastName) 
};

export default makeReducer(reducers, OrderedMap());