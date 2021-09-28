import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    const active={
        fontWeight: "bold",
        color: "red",
      };
    return (
        <nav>
        <NavLink to="/home" activeStyle={active} >Home</NavLink>
        <NavLink to="/friends" activeStyle={active} className="header">Friends</NavLink>
        <NavLink to="/about" activeStyle={active}>About</NavLink>
        <NavLink to="/contact" activeStyle={active} className="header">Contact</NavLink>
        </nav>
    );
};

export default Header;