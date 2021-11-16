import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="navbar">
        <NavLink className="logo" to="/">
          Startup
        </NavLink>
        <ul className={toggle ? "nav-links-other": "nav-links"}
          onClick={() => setToggle(false)}
        >
          <NavLink exact to="/" className="home" activeClassName="menu_active">
            <li>Home</li>
          </NavLink>

          <NavLink to="/about" className="about" activeClassName="menu_active">
            <li>About</li>
          </NavLink>

          <NavLink
            to="/service"
            className="service"
            activeClassName="menu_active"
          >
            <li>Services</li>
          </NavLink>

          <NavLink
            to="/contact"
            className="contact"
            activeClassName="menu_active"
          >
            <li>Contact</li>
          </NavLink>
        </ul>
        <button className="toggle-bar-icons"
        onClick={() => setToggle(!toggle)}
        >
          {toggle ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
      </nav>
    </>
  );
};
export default Navbar;
