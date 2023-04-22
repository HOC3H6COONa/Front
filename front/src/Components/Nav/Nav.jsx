import React from 'react';
import classes from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = (props) =>{
    return(
        <nav className={classes.AppNav}>
            <div className={classes.item}>
                <NavLink to={'/profile/'+1} className = {navData => navData.isActive ? `${classes.activeLink} ${classes.item}` : classes.item}> Profile </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/Users" className = {navData => navData.isActive ? `${classes.activeLink} ${classes.item}` : classes.item}> Users </NavLink>
            </div>
            <div className = {classes.item}>
                <NavLink to="/map" className = {navData => navData.isActive ? `${classes.activeLink} ${classes.item}` : classes.item}> Map </NavLink>
            </div>
            <div className = {classes.item}>
                <NavLink to="/activities" className = {navData => navData.isActive ? `${classes.activeLink} ${classes.item}` : classes.item}> Activities </NavLink>
            </div>
        </nav>
    );
}

export default Nav;
