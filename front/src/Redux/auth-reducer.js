import {AuthApi} from "../api/authapi";
import {FORM_ERROR} from "final-form";


const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    userid: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            /*    isAuth: true*/
            };
        default:
            return state;
            }
    }


export const setAuthUserData = (userid,email,login,isAuth) => ({type: SET_USER_DATA, data: {userid,email,login,isAuth}})

export const getAuthUserData = () => (dispatch)=>{
    AuthApi.getAuth()
        .then(data=>{
            if (data.resultCode === 0){
                let {id,email,login} = data.data;
                dispatch(setAuthUserData(id,email,login,true));
            }
        })
}

export const login = (email,password,rememberMe) =>  async(dispatch) =>{
    const response = await AuthApi.Login(email,password,rememberMe);
    if (response.data.resultCode === 0){
        let {id,email,login} = response.data.data;
        dispatch(getAuthUserData());
    }else {
        return {[FORM_ERROR]: "Failed to login"}
    }
}
/*export const login = (email,password,rememberMe) =>  (dispatch) =>{
        AuthApi.Login(email,password,rememberMe)
            .then(response=>{
                if (response.data.resultCode === 0){
                    let {id,email,login} = response.data.data;
                    debugger;
                    dispatch(getAuthUserData());
                }else {
                    debugger;
                    return {[FORM_ERROR]: "FAILED TO LOGIN"}
                }
            })
}*/

export const logout = (email,password,rememberMe) =>  (dispatch) =>{
    AuthApi.Logout()
        .then(response=>{
            if (response.data.resultCode === 0){
                let {id,login,email} = response.data.data;
                dispatch(setAuthUserData(null,null,null,false));
            }
        })
}
export default authReducer;
