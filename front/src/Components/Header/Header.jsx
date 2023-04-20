import React from 'react'
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) =>{
    return(
        <header className={classes.AppHeader}>
            <a className={classes.item}> FRONT </a>
            <div className={classes.loginBlock}>
                {props.isAuth ? <div> {props.login} | <button onClick={props.logout}>Log out</button></div> :
                    <NavLink to={'/login'} className={classes.loginBlock}>
                        Login
                    </NavLink>
                }
            </div>
        </header>
    );
}

export default Header;
