import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Menu extends Component{
  render(){
    return (
      <div className="nav-side-menu">
        <div className="menu-list">
          <ul id="menu-content" className="menu-content">
            <li><NavLink exact to="/">Departments</NavLink></li>
            <li><NavLink to="/employees">Employees</NavLink></li>
          </ul>
        </div>
      </div>);
  }
}

