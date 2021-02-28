import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/songs">Songs</NavLink>
            <NavLink to="/writes">Writers</NavLink>
            <NavLink to="/artists">Artists</NavLink>
        </div>
    );
};

export default NavBar;