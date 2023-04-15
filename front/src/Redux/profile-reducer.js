/*import {initialState} from './profilecEditReducer'*/
const SET_PROFILE = 'SET_PROFILE'

let initialState = {
    profile:
        {
            name:null,
            image:null
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


