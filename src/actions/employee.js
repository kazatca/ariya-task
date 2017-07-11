export const setAll = employees => ({
  type: 'SET_EMPLOYEES',
  payload: {employees}
});

export const fetchAll = () => dispatch =>
  dispatch({
    type: 'FETCH_EMPLOYEES',
    remote: {
      url: '/employees',
      success: setAll
    }
  })
  .then(employees => dispatch(setAll(employees)));

export const syncEmployee = id => (dispatch, getState) => {
  dispatch({
    type: 'SYNC_EMPLOYEE',
    remote: {
      method: 'PUT',
      url: `/employees/${id}`,
      body: getState().getIn(['employees', id])
    }
  });
};

export const setFirstName = (id, firstName) => dispatch => {
  dispatch({
    type: 'SET_EMPLOYEE_FIRST_NAME',
    payload: {
      id, 
      firstName
    }
  });

  dispatch(syncEmployee(id));
};

export const setLastName = (id, lastName) => dispatch => {
  dispatch({
    type: 'SET_EMPLOYEE_LAST_NAME',
    payload: {
      id, 
      lastName
    }
  });
  
  dispatch(syncEmployee(id));
};

export const setDepartmentId = (id, departmentId) => dispatch => {
  dispatch({
    type: 'SET_EMPLOYEE_DEPARTMENT',
    payload: {
      id,
      departmentId
    }
  });

  dispatch(syncEmployee(id));
};  

export const add = () => dispatch => 
  dispatch({
    type: 'POST_EMPLOYEE',
    remote: {
      method: 'POST',
      url: '/employees',
      body: {
        firstName: 'New', 
        lastName: 'Employee'
      }
    }
  })
  .then(() => dispatch(fetchAll()));

export const remove = id => dispatch => 
  dispatch({
    type: 'DELETE_EMPLOYEE',
    remote: {
      method: 'DELETE',
      url: `/employees/${id}`
    }
  })
  .then(() => dispatch(fetchAll()));
