import {List} from 'immutable';
import {createSelector} from 'reselect';

export const getDepartments = createSelector([
  state => state.get('departments')
],
  departments => departments
    .map((department, id) => ({
      ...department.toJS(),
      id
    }))
    .toArray()
);

export const departmentIsEmpty = createSelector([
  state => state.get('employees', List()),
  (_, departmentId) => departmentId
],
  (employees, departmentId) => 
    employees.filter(employee => 
      employee.get('departmentId') == departmentId
    )
    .size == 0
);