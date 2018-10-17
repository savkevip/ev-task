import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <div className="text-left">
    <nav className="navbar navbar-default">
      <NavLink className="navbar-brand" to="/">
        Account Details
      </NavLink>
    </nav>
  </div>
);

export default Header;
