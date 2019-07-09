import React from "react";
import { NavLink } from "react-router-dom";
export default class Header extends React.Component {
  render() {
    return (
      <header>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/student_page">
          Students
        </NavLink>
        <NavLink activeClassName="active" to="/contact">
          Contact
        </NavLink>
        <NavLink activeClassName="active" to="/my_other_path">
          my_other_path
        </NavLink>
      </header>
    );
  }
}
