import React from 'react';
import PropTypes from 'prop-types';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import {Provider} from 'react-redux';

import Menu from './Menu.jsx';
import EmployeeList from './EmployeeList.jsx';
import DepartmentList from './DepartmentList.jsx';

const App = ({store}) =>
  <Provider store={store}>
    <Router>
      <div>
        <Menu />
        <Route exact path="/" component={DepartmentList} />
        <Route path="/employees" component={EmployeeList} />
      </div>
    </Router>
  </Provider>;

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;