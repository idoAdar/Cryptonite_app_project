import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={classes.Nav_container}>
            <NavLink to="/" exact activeClassName={classes.Active}>Home</NavLink>
            <NavLink to="/live-reports" activeClassName={classes.Active}>Live Reports</NavLink>
            <NavLink to="/profile" activeClassName={classes.Active}>About</NavLink>
        </div>
    )
}

export default Navbar;