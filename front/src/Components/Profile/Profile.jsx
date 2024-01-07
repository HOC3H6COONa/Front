import React from 'react'
import classes from './Profile.module.css'

import {NavLink} from "react-router-dom";
import {Preloader} from "../../utilits/Preloader";


const Profile = (props) => {
    if (!props.profile){
        return(
            <Preloader/>
        )
    }

    const Unfollow =()=>{
        props.Unfollow(props.profile.id);
        props.profile.is_following = false;
    }

    const Follow =()=>{
        props.Follow(props.profile.id);
        props.profile.is_following = true;
    }

    return (
            <div>
                <img src={props.profile.image} className={classes.img}/>
                <div className={classes.text}> Имя: {props.profile.name}</div>
                <div className={classes.text}> Пол: {props.profile.gender} </div>
                <div className={classes.text}> Возраст: {props.profile.age} </div>
            <div className={classes.profile}>
                {props.profile.id === props.AuthId ?
                    <NavLink to={'/EditProfile'}>
                        <button className={classes.button}>Edit Profile</button>
                    </NavLink> :
                    <></>
                }
                {props.isAuth && props.profile.id !== props.AuthId  ?
                    props.profile.is_following ?
                    <button className={classes.button} onClick={Unfollow}>Unfollow</button>:
                    <button className={classes.button} onClick={Follow} >Follow</button>: <></>
                }
                </div>
            </div>
        )
}
export default Profile