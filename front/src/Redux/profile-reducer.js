import {ProfileApi} from "../api/profileapi";
import {FORM_ERROR} from "final-form";
import {getAuthUserData} from "./auth-reducer";


const SET_PROFILE = 'SET_PROFILE'

let initialState = {
    profile:
        {
            name:null,
            image:null,
            gender:null,
            age: null,
        }
}

export const profileReducer = (state = initialState,action) =>{

    switch(action.type) {
        case SET_PROFILE:
            return {...state, profile: action.profile};
        default:
            return state;
    }
}


export const setProfile = (profile) => ({type: SET_PROFILE,profile})

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

