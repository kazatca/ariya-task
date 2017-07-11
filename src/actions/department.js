export const setAll = departments => ({
  type: 'SET_DEPARTMENTS',
  payload: {departments}
});

export const fetchAll = () => dispatch => 
  dispatch({
    type: 'FETCH_DEPARTMENTS',
    remote: {
      url: '/departments'
    }
  })
  .then(departments => dispatch(setAll(departments)));

export const syncDepartment = id => (dispatch, getState) => {
  dispatch({
    type: 'SYNC_DEPARTMENT',
    remote: {
      method: 'PUT',
      url: `/departments/${id}`,
      body: getState().getIn(['departments', id])
    }
  });
};

export const setName = (id, name) => dispatch => {
  dispatch({
    type: 'SET_DEPARTMENT_NAME',
    payload: {
      id, 
      name
    }
  });

  dispatch(syncDepartment(id));
};

export const add = () => dispatch => 
  dispatch({
    type: 'POST_DEPARTMENT',
    remote: {
      method: 'POST',
      url: '/departments',
      body: {name: 'New department'}
    }
  })
  .then(() => dispatch(fetchAll()));

export const remove = id => dispatch => 
  dispatch({
    type: 'DELETE_DEPARTMENT',
    remote: {
      method: 'DELETE',
      url: `/departments/${id}`
    }
  })
  .then(() => dispatch(fetchAll()));
