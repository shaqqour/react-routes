import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="topnav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/songs">Songs</NavLink>
            <NavLink to="/writers">Writers</NavLink>
            <NavLink to="/artists">Artists</NavLink>
        </div>
    );
};

export default NavBar;