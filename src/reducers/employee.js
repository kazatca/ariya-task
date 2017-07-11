import {OrderedMap, Map} from 'immutable';

import {makeReducer} from '../lib/reducer-utils.js';

const updateEmployee = key => (employees, action) => 
  employees.setIn([action.id, key], action[key]);

const reducers = {
  SET_EMPLOYEES: (_, {employees}) => 
    OrderedMap(employees.map(({id, ...rest}) => [id, Map({...rest})])),
  SET_EMPLOYEE_FIRST_NAME: updateEmployee('firstName'),
  SET_EMPLOYEE_LAST_NAME: updateEmployee('lastName'),
  SET_EMPLOYEE_DEPARTMENT: updateEmployee('departmentId')
};

export default makeReducer(reducers, OrderedMap());