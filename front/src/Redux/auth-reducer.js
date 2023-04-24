import {AuthApi} from "../api/authapi";
import {FORM_ERROR} from "final-form";



const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    userid: null,
    image: null,
    name: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            };
        default:
            return state;
            }
    }


export const setAuthUserData = (userid,image,name,isAuth) => ({type: SET_USER_DATA, data: {userid,image,name,isAuth}})

export const getAuthUserData = () => async(dispatch)=>{
    const response =  await AuthApi.getAuth();
            if (response.status === 200){
                let {id,image,name} = response.data;
                dispatch(setAuthUserData(id,image,name,true));
            }
}


export const login = (email,password) =>  async(dispatch) =>{
    const response = await AuthApi.Login(email,password);
    if (response.status === 200){
        let {refresh,access} = response.data;
        localStorage.setItem('token',access);
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

export const logout = () => (dispatch) => {
    localStorage.removeItem('token')
    dispatch(setAuthUserData(null, null, null, null, false));
}


export default authReducer;
