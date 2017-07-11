import {createSelector} from 'reselect';

export const getEmployees = createSelector([
  state => state.get('employees')
],
  employees => employees
    .map((employee, id) => ({
      ...employee.toJS(),
      id
    }))
    .toArray()
);