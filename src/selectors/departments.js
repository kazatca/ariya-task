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