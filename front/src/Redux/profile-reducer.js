import {ProfileApi} from "../api/profileapi";
import {FORM_ERROR} from "final-form";
import {getAuthUserData} from "./auth-reducer";


const SET_PROFILE = 'SET_PROFILE'
const SET_FOLLOWING_STATUS ='SET_FOLLOWING_STATUS'

let initialState = {
    profile:
        {
            name:null,
            image:null,
            gender:null,
            age: null,
            is_following:false
        }
}

export const profileReducer = (state = initialState,action) =>{

    switch(action.type) {
        case SET_PROFILE:
            return {...state, profile: action.profile};
        case SET_FOLLOWING_STATUS:
            return{...state,is_following: action.is_following}
        default:
            return state;
    }
}


export const setProfile = (profile) => ({type: SET_PROFILE,profile})
export const setFollowingStatus = (is_following) => ({type: SET_FOLLOWING_STATUS,is_following})

export const getProfile = (userId) => {
    return (dispatch) =>{
        ProfileApi.getProfile(userId)
            .then(data => {
               dispatch(setProfile(data));
            });
    }
}

export const editProfile = (Image,Name,Gender,Birthday) => async(dispatch) =>{
    const response = await ProfileApi.editProfile(Image,Name,Gender,Birthday);
    if (response.status === 200){
        dispatch(getAuthUserData());
        return 0;
    }else{
        return {[FORM_ERROR]: "Failed to Edit Profile"}
    }

}

export const getFollowingStatus = (userId) => {
    return (dispatch) =>{
        ProfileApi.getFollowingStatus(userId)
            .then(data => {
                dispatch(setFollowingStatus(data));
            });
    }
}

export const Follow = (userId) => async(dispatch) =>{
    const response = await ProfileApi.follow(userId);
    if (response.status === 204){
        dispatch(getProfile(userId));
        return 0;
    }else{
        return 'error'
    }
}

export const Unfollow = (userId) => async(dispatch) =>{
    const response = await ProfileApi.unfollow(userId);
    if (response.status === 204){
        dispatch(getProfile(userId));
        return 0;
    }else{
        return 'error'
    }
}
