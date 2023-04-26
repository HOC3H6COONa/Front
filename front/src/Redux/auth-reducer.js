import {AuthApi} from "../api/authapi";
import {FORM_ERROR} from "final-form";



const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    birthday: null,
    email: null,
    gender: null,
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


export const setAuthUserData = (birthday,email,gender,userid,image,name,isAuth) => ({type: SET_USER_DATA, data: {birthday, email, gender,userid,image,name,isAuth}})

export const getAuthUserData = () => async(dispatch)=>{
    const response =  await AuthApi.getAuth();
            if (response.status === 200){
                let {birthday, email ,gender,id,image,name} = response.data;
                dispatch(setAuthUserData(birthday, email ,gender, id,image,name,true));
            }
}


export const login = (email,password) =>  async(dispatch) =>{
    const response = await AuthApi.Login(email,password);
    if (response.status === 200){
        let {access} = response.data;
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
