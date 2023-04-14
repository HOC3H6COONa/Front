import React from 'react'
import classes from './Profile.module.css'

import {NavLink} from "react-router-dom";


const Profile = (props) => {
    if (!props.profile){
        return(
        <div> 123 </div>
        )
    }


    return (
            <div>
                <img src={props.profile.image} className={classes.img}/>
                <div className={classes.text}> Имя: {props.profile.name}</div>
                {/*        <div className={classes.text}> Пол: {props.profile.gender} </div>
        <div className={classes.text}> Возраст: {props.profile.age} </div>
        <div className={classes.text}> Город: {props.profile.city} </div>*/}
                <div className={classes.profile}>
                    <NavLink to={'/EditProfile'}>
                        <button className={classes.button}>Edit Profile</button>
                    </NavLink>
                </div>
            </div>
        )
}
export default Profile