import {AuthApi} from "../api/authapi";
import {FORM_ERROR} from "final-form";
import {ProfileApi} from "../api/profileapi";



const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    birthday: null,
    email: null,
    gender: null,
    userid: null,
    image: null,
    name: null,
    isAuth: false,
    description: null,
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


export const setAuthUserData = (birthday,email,gender,userid,image,name,isAuth,description) =>
    ({type: SET_USER_DATA, data: {birthday, email, gender,userid,image,name,isAuth,description}})


export const getAuthUserData = () => async(dispatch)=>{
    const response =  await AuthApi.getAuth();
            if (response.status === 200){
                let {birthday, email ,gender,id,image,name,description} = response.data;
                dispatch(setAuthUserData(birthday, email ,gender, id,image,name,true,description));
            }
}


export const editProfile = (Image,Name,Gender,Birthday,Description) => async(dispatch) =>{
    const response = await AuthApi.editProfile(Image,Name,Gender,Birthday,Description);
    if (response.status === 200){
        console.log(response)
        // dispatch(getAuthUserData());
        let {birthday, email ,gender,id,image,name,description} = response.data;
        dispatch(setAuthUserData(birthday, email ,gender, id,image,name,description));
    }else{
        return {[FORM_ERROR]: "Failed to Edit Profile"}
    }

}


export const register = (email,image,name,gender,birthday,password) =>  async(dispatch) =>{
    const response = await AuthApi.Register(email,image,name,gender,birthday,password);
    if (response.status === 201){
        return 0;
    }else {
        return {[FORM_ERROR]: "Failed to register"}
    }
}




export const login = (email,password) =>  async(dispatch) =>{
    const response = await AuthApi.Login(email,password);
    if (response.status === 200){
        let {access} = response.data;
        localStorage.setItem('token',access);
        dispatch(getAuthUserData());
    }else {
        return 'error'
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

export const logout = () => async(dispatch) => {
    const response = await AuthApi.Logout();
    if (response.status === 200){
        localStorage.removeItem('token')
        dispatch(setAuthUserData(null, null, null, null, null, null,false, false));
    }else {
        return 'error'
    }
}


export default authReducer;
