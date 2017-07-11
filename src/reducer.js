import {combineReducers} from './lib/reducer-utils.js';
import employees from './reducers/employee.js';
import departments from './reducers/department.js';
import notify from './reducers/notify.js';

export default combineReducers({
  departments,
  employees,
  notify
});