import React, {useState} from 'react'
import classes from './Profile.module.css'

import {NavLink, useParams} from "react-router-dom";
import {Preloader} from "../../utilits/Preloader";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProfile, Follow, Unfollow} from "../../Redux/profile-reducer";




const Profile = (props) => {

    const dispatch = useDispatch();

    const params = useParams()

    const userId = params.userId

    const [profile, setProfile] = useState({})

    const {profileData, AuthId, isAuth} = useSelector((state)=>({
        profileData: state.profilePage.profile,
        AuthId: state.auth.userid,
        isAuth: state.auth.isAuth,
    }))

    useEffect(()=> {
        const fetchProfile = async () => {
            await dispatch(getProfile(userId))
        }
        fetchProfile()
    },[dispatch,userId]);

    useEffect(()=>{
        setProfile({profileData,AuthId,isAuth})
    },[profileData, AuthId, isAuth, userId])

    if (!profile.profileData){
        return(
            <Preloader/>
        )
    }

    const handleUnfollow =()=>{
        dispatch(Unfollow(profile.profileData.id));
        profile.profileData.is_following = false;
    }

    const handleFollow =()=>{
        dispatch(Follow(profile.profileData.id));
        profile.profileData.is_following = true;
    }

    return (
            <div>
                <img src={profile.profileData.image} className={classes.img}/>
                <div className={classes.text}> Имя: {profile.profileData.name}</div>
                <div className={classes.text}> Пол: {profile.profileData.gender} </div>
                <div className={classes.text}> Возраст: {profile.profileData.age} </div>
                <div className={classes.text}> Обо мне: {profile.profileData.description} </div>
            <div className={classes.profile}>
                {profile.profileData.id === profile.AuthId ?
                    <NavLink to={'/EditProfile'}>
                        <button className={classes.button}>Edit Profile</button>
                    </NavLink> :
                    <></>
                }
                {profile.isAuth && profile.profileData.id !== profile.AuthId  ?
                    profile.profileData.is_following ?
                    <button className={classes.button} onClick={handleUnfollow}>Unfollow</button>:
                    <button className={classes.button} onClick={handleFollow} >Follow</button>: <></>
                }
                </div>
            </div>
        )
}
export default Profile