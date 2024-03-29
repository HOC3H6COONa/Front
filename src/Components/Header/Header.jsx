import React from 'react'
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) =>{
    return(
        <header className={classes.AppHeader}>
            <a className={classes.item}> FRONT </a>
            <div className={classes.loginBlock}>
                {props.name ?
                    <span>
                        <img src ={props.image} className={classes.image}/> |
                        <NavLink to ={'/Events'}>
                            <span  className={classes.loginBlock} onClick={props.logout} >LogOut</span>
                        </NavLink>
                    </span>
                    :
                    <NavLink to={'/login'} className={classes.loginBlock}>
                        Login
                    </NavLink>
                }
            </div>
        </header>
    );
}

export default Header;
