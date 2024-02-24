import React, {useState} from 'react';
import classes from './Nav.module.css'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect} from 'react'

const Nav = (props) =>{

    const [Id,setId] = useState({})
    const authId = useSelector((state)=>(state.auth.userid))


    useEffect(()=>{
        const fetchId = async()=> {
            setId(authId)
        }
        fetchId()
    },[authId])


    return(
        <nav className={classes.AppNav}>
            <div className={classes.item}>

                {Id?<NavLink to={'/profile/'+Id} className = {navData => navData.isActive ? `${classes.activeLink} ${classes.item}` : classes.item}> Profile </NavLink>:
                    <NavLink to={'/login'} className = {navData => navData.isActive ? `${classes.activeLink} ${classes.item}` : classes.item}> Profile </NavLink>}
            </div>
            <div className = {classes.item}>
                <NavLink to="/Events" className = {navData => navData.isActive ? `${classes.activeLink} ${classes.item}` : classes.item}> Events </NavLink>
            </div>
            <div className = {classes.item}>
                <NavLink to="/map" className = {navData => navData.isActive ? `${classes.activeLink} ${classes.item}` : classes.item}> Map </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/Users" className = {navData => navData.isActive ? `${classes.activeLink} ${classes.item}` : classes.item}> Users </NavLink>
            </div>
        </nav>
    );
}

export default Nav;
